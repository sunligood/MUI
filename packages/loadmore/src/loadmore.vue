<template>
  <div class="mui-loadmore" ref="loadmoreContainer">
    <div class="mui-loadmore-wrapper">
      <div class="mui-loadmore-top mui-loadmore-text" :class="[dragState === 'pullDown' ? 'aaa' : '']" v-show="dragState === 'pullDown'">
        <slot name="top"></slot>
      </div>
      <div @touchstart="dragstart" @touchmove="dragmove" @touchend="dragend" ref="loadmore">
        <slot></slot>
      </div>
      <div class="mui-loadmore-bottom mui-loadmore-text" :class="[dragState === 'pullUp' ? 'aaa' : '']" v-show="dragState === 'pullUp'">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // true 加载完毕，停止上拉加载更多
    allLoaded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dragY: 0,
      loadmore: null,
      loadmoreContainer: null,
      isDragUp: false,
      isDragDown: true,
      isDrag: false,
      dragState: '',
      scrollHeight: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadmoreContainer = this.$refs.loadmoreContainer
      this.loadmore = this.$refs.loadmore
      this.setIsDrag()
      // 滚动事件
      this.loadmoreContainer.onscroll = (event) => {
        this.getScrollHeight()
        this.setIsDrag()
      }
    })
  },
  methods: {
    getScrollHeight () {
      if (this.loadmoreContainer) {
        let height = getComputedStyle(this.loadmoreContainer, null).height
        height = Number(height.split('px')[0])
        let scrollHeight = this.loadmore.clientHeight - height
        this.scrollHeight = scrollHeight
      } else {
        this.scrollHeight = 0
      }
    },
    dragstart(event) {
      this.dragY = event.changedTouches[0].pageY
      this.getScrollHeight()
      this.setIsDrag()
      if (this.loadmoreContainer.scrollTop === 0 || this.loadmoreContainer.scrollTop === this.scrollHeight) {
        this.isDrag = true
      }
    },
    dragend(event) {
      if (!this.isDragUp && !this.isDragDown) return
      let loadmore = this.loadmore
      loadmore.style.transition = `0.2s`
      loadmore.style.transform = `translateY(0px)`
      if (this.dragState === 'pullDown') {
        setTimeout(() => {
          this.$emit('topMethod')
        }, 100)
      }
      if (this.dragState === 'pullUp') {
        setTimeout(() => {
          this.$emit('bottomMethod')
        }, 100)
      }
      this.dragState = ''

    },
    dragmove(event) {
      let loadmore = this.loadmore
      // 拖拽距离
      let moveY = event.changedTouches[0].pageY - this.dragY
      // 拖拽时，关闭动画
      loadmore.style.transition = `none`
      // 是否到达上下末端，并停止滑动

      if (this.isDrag) {
        if (moveY > 0 && this.isDragUp) {
          if (moveY > 40) {
            this.dragState = 'pullDown'
          } else {
            this.dragState = ''
          }
          loadmore.style.transform = `translateY(${moveY}px)`
        } else if (moveY < 0 && this.isDragDown && !this.allLoaded) {
          if (moveY < -40) {
            this.dragState = 'pullUp'
          } else {
            this.dragState = ''
          }
          loadmore.style.transform = `translateY(${moveY}px)`
        }
      } else {
        this.dragState = ''
      }

    },
    setIsDrag() {
      if (this.loadmoreContainer.scrollTop === 0) {
        this.isDragUp = true
        this.isDragDown = false

        this.isDrag = false
      } else if (this.loadmoreContainer.scrollTop === this.scrollHeight) {
        this.isDragUp = false
        this.isDragDown = true

        this.isDrag = false
      } else {
        this.isDragUp = false
        this.isDragDown = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mui-loadmore {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
  .mui-loadmore-wrapper {
    position: relative;
    .mui-loadmore-text {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 13px;
      color: #666;
      line-height: 40px;
    }

    .mui-loadmore-top {
      top: 0;
    }
    .mui-loadmore-bottom {
      bottom: 0;
    }
  }
}
</style>

