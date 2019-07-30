<template>
  <div class="mui-range">
    <slot name="start" class="mui-range-start"></slot>
    <div class="mui-range-container" ref="container">
      <div
        class="mui-range-runway"
        :class="{'is-section': section}"
        :style="{height: height + 'px'}"
      ></div>
      <div
        class="mui-range-progress"
        :class="{'is-section': section}"
        :style="{height: height + 'px'}"
        ref="progress"
      ></div>
      <div
        class="mui-range-progress"
        :class="{'is-section is-right': section}"
        v-if="section"
        :style="{height: height + 'px'}"
        ref="progressRight"
      ></div>
      <div class="mui-range-thumb" @touchstart="dragstart" @touchmove="dragmove" ref="thumb"></div>
      <div
        v-if="section"
        class="mui-range-thumb is-section"
        @touchstart="dragstartR"
        @touchmove="dragmoveR"
        ref="thumbRight"
      ></div>
    </div>
    <slot name="end" class="mui-range-end"></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: 0
    },
    section: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    // 步数只能设置偶数或者1
    step: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 2
    },
  },
  data() {
    return {
      dragX: 0,
      dragRightX: 0,
      progress: null,
      thumb: null,
      progressRight: null,
      thumbRight: null,
      retainThumbX: 0,
      retainThumbRightX: 0,
      leftOffset: 0,
      rightOffset: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.container = this.$refs.container
      this.progress = this.$refs.progress
      this.thumb = this.$refs.thumb
      this.progressRight = this.$refs.progressRight
      this.thumbRight = this.$refs.thumbRight
      if (this.section) {
        if (!Array.isArray(this.value) && this.value.length !== 2) {
          throw new Error('this.value   It has to be an array with length 2')
        }
        this.emitInput([this.value[0], this.value[1]])
      } else {
        if (this.value > this.max || this.value < this.min) {
          throw new Error('this.value   The initial value is not in the interval')
        }
        this.emitInput(this.value)
      }

      // 预设置指定值
      let thumbRect = this.thumb.getBoundingClientRect()
      let containerRect = this.container.getBoundingClientRect()
      // 需要步数
      let setpCount = (this.max - this.min) / this.step
      // 一步实际距离
      let setpSize = (containerRect.width - thumbRect.width) / setpCount
      // 获取当前步数
      let nowStepCount = Math.round((this.value - this.min) / this.step)
      if (this.step === 1) {
        nowStepCount = Math.round((this.value - this.min))
      }
      if (this.value <= this.min) {
        this.setElementDistance(0)
      } else if (this.value >= this.max) {
        this.setElementDistance(containerRect.width - thumbRect.width)
      } else {
        this.setElementDistance(setpSize * nowStepCount)
      }
    })
  },
  methods: {
    dragstart(event) {
      event.preventDefault()
      this.dragX = event.changedTouches[0].pageX
      let thumbRect = this.thumb.getBoundingClientRect()
      let containerRect = this.container.getBoundingClientRect()
      this.retainThumbX = thumbRect.x - containerRect.x
      this.leftOffset = event.changedTouches[0].pageX - thumbRect.x
    },
    dragmove(event) {
      event.preventDefault()
      let moveX = event.changedTouches[0].pageX - this.dragX
      moveX = moveX + this.retainThumbX

      let containerRect = this.container.getBoundingClientRect()
      let thumbRect = this.thumb.getBoundingClientRect()
      // 需要步数
      let setpCount = (this.max - this.min) / this.step
      // 一步实际距离
      let setpSize = (containerRect.width - thumbRect.width) / setpCount
      // 获取当前步数
      let nowStepCount = Math.round(moveX / setpSize)

      // 是否分割滑块
      // if (this.section) {
      //   let thumbRightRect = this.thumbRight.getBoundingClientRect()
      //   if (Math.round(event.changedTouches[0].pageX - this.leftOffset + thumbRect.width) >= Math.round(thumbRightRect.x)) {
      //     this.setElementDistance(thumbRightRect.x - containerRect.x - thumbRect.width)
      //     return
      //   }
      // }
      // 滑动的X轴大于 container的X轴则 不能继续向右滑动
      if (event.changedTouches[0].pageX >= containerRect.x + containerRect.width) {
        this.setElementDistance(containerRect.width - thumbRect.width)
        if (this.section) {
          this.emitInput([this.max, this.value[1]])
        } else {
          this.emitInput(this.max)
        }
      } else if (moveX < 0) {
        // 滑动距离小于0 则不能继续向左滑动
        this.setElementDistance(0)
        if (this.section) {
          this.emitInput([this.min, this.value[1]])
        } else {
          this.emitInput(this.min)
        }
      } else if (moveX >= 0 && moveX + thumbRect.width <= containerRect.width) {
        // 滑动距离大于0 并且 滑动的距离小于 container的宽度。可任意滑动
        if (this.step !== 1) {
          this.setElementDistance(setpSize * nowStepCount)

          let value = Math.round(this.min + this.step * nowStepCount)
          if (value <= this.max && value >= this.min) {
            if (this.section) {
              this.emitInput([value, this.value[1]])
            } else {
              this.emitInput(value)
            }
          }
        } else {
          this.setElementDistance(setpSize * nowStepCount)
          if (this.section) {
            this.emitInput([Math.round(this.min + this.step * nowStepCount), this.value[1]])
          } else {
            this.emitInput(Math.round(this.min + this.step * nowStepCount))
          }
        }
      }
    },
    dragstartR(event) {
      event.preventDefault()
      this.dragRightX = event.changedTouches[0].pageX
      let thumbRightRect = this.thumbRight.getBoundingClientRect()
      let containerRect = this.container.getBoundingClientRect()
      this.retainThumbRightX = thumbRightRect.x - containerRect.x
      this.rightOffset = event.changedTouches[0].pageX - thumbRightRect.x
    },
    dragmoveR(event) {
      event.preventDefault()
      let moveX = event.changedTouches[0].pageX - this.dragRightX
      moveX = moveX + this.retainThumbRightX

      let containerRect = this.container.getBoundingClientRect()
      let thumbRightRect = this.thumbRight.getBoundingClientRect()
      let thumbRect = this.thumb.getBoundingClientRect()
      // console.log(moveX)
      // 需要步数
      let setpCount = (this.max - this.min) / this.step
      // 一步实际距离
      let setpSize = (containerRect.width - thumbRightRect.width) / setpCount
      // 获取当前步数
      let nowStepCount = Math.round(moveX / setpSize)
      // 右滑块滑动，当小于等于左滑块的位置时，停止
      // if (Math.round(event.changedTouches[0].pageX - this.rightOffset) <= Math.round(thumbRect.x + thumbRect.width)) {
      //   // this.setElementDistanceR(thumbRect.x - containerRect.x + thumbRightRect.width)
      //   this.setElementDistanceR(setpSize * nowStepCount)
      //   // this.emitInput([this.value[0], this.value[0] + this.step])
      // } else 
      if (event.changedTouches[0].pageX >= containerRect.x + containerRect.width) {
        this.setElementDistanceR(containerRect.width - thumbRightRect.width)
        this.emitInput([this.value[0], this.max])
      } else if (moveX >= 0 && moveX + thumbRightRect.width <= containerRect.width) {
        // 滑动距离大于0 并且 滑动的距离小于 container的宽度。可任意滑动
        if (this.step !== 1) {
          this.setElementDistanceR(setpSize * nowStepCount)
          let value = Math.round(this.min + this.step * nowStepCount)
          if (value <= this.max && value >= this.min) {
            this.emitInput([this.value[0], value])
          }
        } else {
          this.setElementDistanceR(setpSize * nowStepCount)
          this.emitInput([this.value[0], Math.round(this.min + this.step * nowStepCount)])
        }
      }
    },
    setElementDistance(distance = 0) {
      this.progress.style.width = `${distance}px`
      this.thumb.style.left = `${distance}px`
    },
    setElementDistanceR(distance = 0) {
      let containerRect = this.container.getBoundingClientRect()
      this.progressRight.style.width = `${containerRect.width - distance}px`
      this.thumbRight.style.left = `${distance}px`
    },
    emitInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss">
.mui-range {
  display: flex;
  width: 100%;
  height: 30px;
  line-height: 30px;
  .mui-range-container {
    position: relative;
    flex: 1;
    .mui-range-progress {
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 0;
      width: 0;
      background-color: #26a2ff;
      transform: translateY(-50%);
      &.is-section {
        background-color: #a9acb1;
      }
      &.is-right {
        right: 0;
        left: auto;
      }
    }
    .mui-range-runway {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      background-color: #a9acb1;
      transform: translateY(-50%);
      &.is-section {
        background-color: #26a2ff;
      }
    }
    .mui-range-thumb {
      z-index: 3;
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      cursor: move;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      &.is-section {
        right: 0;
        left: auto;
      }
    }
  }
}
</style>

