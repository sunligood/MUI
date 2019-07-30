<template>
  <transition name="mui-picker-pop">
    <div class="mui-picker" v-show="visible" ref="picker">
      <div class="mui-picker-mask" @click="maskEvent"></div>
      <div class="mui-picker-wrapper">
        <div class="picker-title">
          <span @click="cancel">{{cancelText}}</span>
          <span @click="confirm">{{confirmText}}</span>
        </div>
        <div class="picker-items">
          <div
            v-for="(slot, index) in slotList"
            :key="index"
            :style="{flex:(slot.flex ? slot.flex : 'none')}"
            :class="[slot.divider ? 'picker-divider' : 'picker-slot']"
            @touchstart.prevent="dragstart"
            @touchmove="dragmove"
            @touchend="dragend"
          >
            <template v-if="slot.valueKey">
              <div v-for="item in slot.values">{{item[slot.valueKey]}}</div>
            </template>
            <template v-else>
              <div v-for="item in slot.values">{{item}}</div>
            </template>
            <div v-if="slot.divider" class="divider">{{slot.content}}</div>
          </div>
        </div>
        <div class="picker-center-highlight" ref="choiceBox"></div>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    slots: {
      type: Array,
      default: () => {
        return null
      }
    }

  },
  data() {
    return {
      visible: this.value,
      // 拖拽初始Y
      startY: 0,
      // 拖拽结束Y
      endY: 0,
      // 上次拖拽Y位置
      retainPageY: 0
    }
  },
  computed: {
    slotList () {
      return this.slots
    }
  },
  methods: {
    dragstart(event) {
      let parentNode = event.target.parentNode
      if (parentNode.classList.length && parentNode.classList[0] !== 'picker-slot') {
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
      if (parentNode.classList.length && parentNode.classList[0] !== 'picker-slot') {
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
            children.className = 'picker-select'
            break
          }
          if (childrenRectCenter < choiceBoxEndY && i === childrens.length - 1) {
            let moveY = childrenRect.height * i
            parentNode.style.transform = `translateY(${-moveY}px)`
            parentNode.style.transition = `0.2s`
            children.className = 'picker-select'
            break
          }
          // 首尾特殊处理 ----end

          // 中间部分处理
          if (choiceBoxStartY <= childrenRectCenter && childrenRectCenter <= choiceBoxEndY) {
            children.className = 'picker-select'
            let moveY = childrenRect.height * i
            parentNode.style.transform = `translateY(${-moveY}px)`
            parentNode.style.transition = `0.2s`
            break
          }
        }
        // 防止元素未被选中
        setTimeout(() => {
          this.preventSlotSelect()
        }, 20)
        this.$emit('change', this.getSlotValue(), this)
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

      if (parentNode.classList.length && parentNode.classList[0] === 'picker-slot') {
        parentNode.style.transform = `translateY(${moveY}px)`
      }
    },
    initSlotSelect () {
      let slots = document.querySelectorAll('.picker-slot')
      for(let i = 0, lenI = slots.length; i < lenI; i++) {
        let slot = slots[i]
        if (slot && slot.children && slot.children.length) {
          slot.children[0].className = 'picker-select'
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
    // 获取选中值
    getSlotValue () {
      let selectIndex = []
      let slots = document.querySelectorAll('.picker-slot')
      for(let i = 0, lenI = slots.length; i < lenI; i++) {
        let slot = slots[i]
        for (let j = 0, lenJ = slot.children.length; j < lenJ; j++) {
          if (slot.children[j].className && slot.children[j].className === 'picker-select') {
            selectIndex.push(j)
          }
        }
      }
      let selectVal = []
      // 有效循环次数， 分隔符不计入
      let count = 0
        this.slots.forEach(slot => {
          if (slot.values) {
            selectVal.push(slot.values[selectIndex[count]])
            count++
          }
        });
      return selectVal
    },
    // 设置指定slot备选数组
    setSlotValues (index, values) {
      // 有效循环次数， 分隔符不计入
      let count = 0
      this.slotList.forEach(slot => {
        if (slot.values) {
          if (index === count) {
            slot.values = values
          }
          count++
        }
      })
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
          let instance = this.$refs.picker
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
.mui-picker {
  .mui-picker-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
  .mui-picker-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    font-size: 18px;
    background-color: #fff;
    transition: 0.3s;
    .picker-title {
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
    .picker-items {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 180px;
      transform: translate(0, 72px);
      .picker-slot {
        padding: 0 10px;
        transition: transform .2s ease-out;
        div {
          height: 36px;
          line-height: 36px;
          color: #707274;
        }
        .picker-select {
          color: #000;
        }
      }
      .picker-divider {
        flex: 0;
        div {
          line-height: 36px;
        }
      }
    }
    .picker-center-highlight {
      z-index: -1;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 34px;
      margin-top: 0;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
    }
  }
}
.mui-picker-pop-enter-active {
  .mui-picker-wrapper {
    transform: translate3d(0, 100%, 0);
  }
}
.mui-picker-pop-leave-active {
  transition: 0.3s;
  .mui-picker-wrapper {
    transform: translate3d(0, 100%, 0);
  }
}
</style>