<template>
  <transition name="mui-datePicker-pop">
    <div class="mui-datePicker" v-show="visible" ref="datePicker">
      <div class="mui-datePicker-mask" @click="maskEvent"></div>
      <div class="mui-datePicker-wrapper">
        <div class="datePicker-title">
          <span @click="cancel">{{cancelText}}</span>
          <span @click="confirm">{{confirmText}}</span>
        </div>
        <div class="datePicker-items">
          <div
            v-for="(slot, index) in slotList"
            :key="index"
            class="datePicker-slot"
            @touchstart.prevent="dragstart"
            @touchmove="dragmove"
            @touchend="dragend"
          >
            <div v-for="item in slot.values">
              {{format(item, slot.type)}}
            </div>
          </div>
        </div>
        <div class="datePicker-center-highlight" ref="choiceBox"></div>
      </div>
    </div>
  </transition>
</template>
 
<script>
import { constants } from 'crypto';
import { setTimeout } from 'timers';
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'date' // date(默认)， datetime， time 
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    yearFormat: {
      type: String,
      default: ''
    },
    monthFormat: {
      type: String,
      default: ''
    },
    dayFormat: {
      type: String,
      default: ''
    },
    hourFormat: {
      type: String,
      default: ''
    },
    minuteFormat: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      visible: this.value,
      slots: [],
      // 拖拽初始Y
      startY: 0,
      // 拖拽结束Y
      endY: 0,
      // 上次拖拽Y位置
      retainPageY: 0
    }
  },
  computed: {
    slotList() {
      return this.slots
    }
  },
  mounted() {
    switch(this.type) {
      case 'date':
        this.slots = [
          { values: this.beforeAndafterYear(5, 15), type: 'year' },
          { values: this.getMonths(), type: 'month' },
          { values: this.getDays(), type: 'day' }
        ]
      break
      case 'datetime':
        this.slots = [
          { values: this.beforeAndafterYear(5, 15), type: 'year' },
          { values: this.getMonths(), type: 'month' },
          { values: this.getDays(), type: 'day' },
          { values: this.getHours(), type: 'hour' },
          { values: this.getMinutes(), type: 'minute' }
        ]
      break
      case 'time':
        this.slots = [
          { values: this.getHours(), type: 'hour' },
          { values: this.getMinutes(), type: 'minute' }
        ]
      break
    }
  },
  methods: {
    dragstart(event) {
      event.preventDefault()
      let parentNode = event.target.parentNode
      if (parentNode.classList.length && parentNode.classList[0] !== 'datePicker-slot') {
        return
      }
      this.startY = event.changedTouches[0].pageY
      // 解析前一次滑动 停留pageY值
      if (parentNode.style.transform) {
        let transform = parentNode.style.transform
        try {
          this.retainPageY = Number(transform.split('(')[1].split(')')[0].split('px')[0])
        } catch (error) {
          throw new Error("split is not a function")
        }
      } else {
        this.retainPageY = 0
      }
    },
    dragend(event) {
      let parentNode = event.target.parentNode
      if (parentNode.classList.length && parentNode.classList[0] !== 'datePicker-slot') {
        return
      }
      // 拖拽结束 加上动画
      parentNode.style.transition = `0.2s`
      this.endY = event.changedTouches[0].pageY
      // 获取选择框Y位置
      let choiceBoxRect = this.$refs.choiceBox.getBoundingClientRect()
      let choiceBoxStartY = choiceBoxRect.y
      let choiceBoxEndY = choiceBoxRect.y + choiceBoxRect.height

      if (parentNode.children.length) {
        let childrens = parentNode.children
        // 清除 选择框选中元素样式
        for (let i = 0, len = childrens.length; i < len; i++) {
          let children = childrens[i]
          children.className = ''
        }
        for (let i = 0, len = childrens.length; i < len; i++) {
          // 获取元素中心Y位置
          let children = childrens[i]
          let childrenRect = children.getBoundingClientRect()
          let childrenRectCenter = childrenRect.y + (childrenRect.height / 2)

          // 首尾特殊处理 ----start
          if (childrenRectCenter > choiceBoxStartY && i === 0) {
            parentNode.style.transform = `translateY(0px)`
            parentNode.style.transition = `0.2s`
            children.className = 'datePicker-select'
            break
          }
          if (childrenRectCenter < choiceBoxEndY && i === childrens.length - 1) {
            let moveY = childrenRect.height * i
            parentNode.style.transform = `translateY(${-moveY}px)`
            parentNode.style.transition = `0.2s`
            children.className = 'datePicker-select'
            break
          }
          // 首尾特殊处理 ----end

          // 中间部分处理
          if (choiceBoxStartY <= childrenRectCenter && childrenRectCenter <= choiceBoxEndY) {
            children.className = 'datePicker-select'
            let moveY = childrenRect.height * i
            parentNode.style.transform = `translateY(${-moveY}px)`
            parentNode.style.transition = `0.2s`
            break
          }
        }
        // 当翻动月份时，当前月份天数重新计算
        this.setSlotDaysValues()
        // 防止元素未被选中
        setTimeout(() => {
          this.preventSlotSelect()
        }, 20)
      }
    },
    dragmove(event) {
      let parentNode = event.target.parentNode
      // 拖拽距离
      let moveY = event.changedTouches[0].pageY - this.startY
      // 元素需要移动的距离， 当前拖拽距离+上一次停留位置
      moveY = moveY + this.retainPageY
      // 拖拽时，关闭动画
      parentNode.style.transition = `none`

      if (parentNode.classList.length && parentNode.classList[0] === 'datePicker-slot') {
        parentNode.style.transform = `translateY(${moveY}px)`
      }
    },
    // 自定义模板
    format (item, type) {
      if (type === 'year') {
        return `${item}${this.yearFormat}`
      }
      if (type === 'month') {
        return `${item}${this.monthFormat}`
      }
      if (type === 'day') {
        return `${item}${this.dayFormat}`
      }
      if (type === 'hour') {
        return `${item}${this.hourFormat}`
      }
      if (type === 'minute') {
        return `${item}${this.minuteFormat}`
      }
    },
    // 第一次进入 默认选择
    initSlotSelect() {
      let slots = document.querySelectorAll('.datePicker-slot')
      for (let i = 0, len = slots.length; i < len; i++) {
        let slot = slots[i]
        if (slot && slot.children && slot.children.length) {
          slot.children[0].className = 'datePicker-select'
        }
      }
    },
    // 防止元素未被选中
    preventSlotSelect () {
      let slots = document.querySelectorAll('.datePicker-slot')
      for (let i = 0, lenI = slots.length; i < lenI; i++) {
        let slot = slots[i]
        let isSelect = false
        if (slot && slot.children && slot.children.length) {
          for (let j = 0, lenJ = slot.children.length; j < lenJ; j++) {
            if (slot.children[j].className === 'datePicker-select') {
              isSelect = true
            }
          }
        }
        if (!isSelect) {
          slot.style.transform = `translateY(0px)`
          slot.style.transition = `0.2s`
          slot.children[0].className = 'datePicker-select'
        }
      }
    },
    // 当翻动月份时，当前月份天数重新计算
    setSlotDaysValues() {
      let year = this.getSlotValue().year
      let month = this.getSlotValue().month
      this.slots.forEach(slot => {
        if(slot.type === 'day') {
          slot.values = this.getDays(month, year)
        }
      })
    },
    // 获取选中值
    getSlotValue() {
      let selectIndex = []
      let slots = document.querySelectorAll('.datePicker-slot')
      for (let i = 0, lenI = slots.length; i < lenI; i++) {
        let slot = slots[i]
        for (let j = 0, lenJ = slot.children.length; j < lenJ; j++) {
          if (slot.children[j].className && slot.children[j].className === 'datePicker-select') {
            selectIndex.push(j)
          }
        }
      }
      let selectVal = {}
      // 有效循环次数
      this.slots.forEach((slot, index) => {
        let obj = {}
        let type = slot.type
        try {
          obj[type] = (slot.values[selectIndex[index]]).toString()
        } catch (error) {
          obj[type] = slot.values[selectIndex[index]]
        }
        Object.assign(selectVal, obj)
      });
      return selectVal
    },
    // 设置年份
    beforeAndafterYear(beforeYear, afterYear) {
      let date = new Date()
      let nowYear = date.getFullYear()
      let yearArr = []
      // 前几年
      for (let i = 0, len = beforeYear; i < len; i++) {
        yearArr.push(nowYear - i)
      }
      yearArr.sort()
      // 后几年
      for (let i = 0, len = afterYear; i < len; i++) {
        yearArr.push(nowYear + i)
      }
      // 去重
      return Array.from(new Set(yearArr))
    },
    // 设置月份
    getMonths() {
      let months = []
      for (let i = 1; i < 13; i++) {
        let month = i < 10 ? `0${i}` : i
        months.push(month)
      }
      return months
    },
    // 设置当前月份天数
    getDays(month, year) {
      let count = 0
      // 31天
      let Days31 = ['01', '03', '05', '07', '08', '10', '12']
      // 30天
      let Days30 = ['04', '06', '09', '11']

      if (Days31.indexOf(month) !== -1) {
        count = 31
      } else if (Days30.indexOf(month) !== -1) {
        count = 30
      } else {
        if (this.isLeapYear(year)) {
          // 闰年
          count = 29
        } else {
          // 平年
          count = 28
        }
      }
      let days = []
      for (let i = 1; i < count + 1; i++) {
        let day = i < 10 ? `0${i}` : i
        days.push(day)
      }

      return days
    },
    // 设置小时
    getHours () {
      let hours = []
      for (let i = 0; i < 24; i++) {
        let hour = i < 10 ? `0${i}` : i
        hours.push(hour)
      }
      return hours
    },
    // 设置分钟
    getMinutes () {
      let minutes = []
      for (let i = 0; i < 60; i++) {
        let minute = i < 10 ? `0${i}` : i
        minutes.push(minute)
      }
      return minutes
    },
    // 判断当前年份是否闰年
    isLeapYear(year) {
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true
      } else {
        return false
      }
    },
    maskEvent() {
      this.$emit('input', !this.visible)
    },
    cancel () {
      this.$emit('input', !this.visible)
    },
    confirm () {
      this.$emit('input', !this.visible)
      this.$emit('confirm', this.getSlotValue())
    }
  },
  watch: {
    value(flag) {
      this.visible = flag
      if (flag) {
        this.$nextTick(() => {
          let index = ++window.muiZIndex
          let instance = this.$refs.datePicker
          instance.style.zIndex = index + 2
          if (instance.children.length > 1) {
            instance.children[0].style.zIndex = index
            instance.children[1].style.zIndex = index + 1
          }
          // 初始化 选中
          this.initSlotSelect()
        })
      }
    }
  }
}
</script>
 
<style lang='scss' scoped>
.mui-datePicker {
  .mui-datePicker-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
  
  .mui-datePicker-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    font-size: 18px;
    background-color: #fff;
    transition: 0.3s;
    .datePicker-title {
      position: relative;
      z-index: 3000;
      display: flex;
      width: 100%;
      line-height: 39px;
      height: 39px;
      border-bottom: 1px solid #eaeaea;
      background-color: #fff;
      transition: 0.3s;
      span {
        flex: 1;
        color: #26a2ff;
        text-align: center;
        font-size: 16px;
      }
    }
    .datePicker-items {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 216px;
      transform: translate(0, 72px);
      .datePicker-slot {
        flex: 1;
        padding: 0 10px;
        transition: transform 0.2s ease-out;
        div {
          height: 36px;
          line-height: 36px;
          color: #707274;
        }
        .datePicker-select {
          color: #000;
        }
      }
    }
    .datePicker-center-highlight {
      z-index: -1;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 34px;
      margin-top: -18px;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
    }
  }
}
.mui-datePicker-pop-enter-active {
  .mui-datePicker-wrapper{
    transform: translate3d(0, 100%, 0);
  }
}
.mui-datePicker-pop-leave-active {
  transition: 0.3s;
  .mui-datePicker-wrapper{
    transform: translate3d(0, 100%, 0);
  }
}
</style>