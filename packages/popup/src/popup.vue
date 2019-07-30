<template>
  <transition name="mui-popup-pop">
    <div class='mui-popup' v-if="visible" ref="popup">
      <div class="mui-popup-mask" @click="maskEvent" v-if="mask"></div>
        <div class="mui-popup-wrapper" :class="'popup-' + position"  ref="popupWrapper">
          <template v-if="position === 'right'">
            <div class="mui-popup-right">
              <slot></slot>
            </div>
          </template>
          <template v-else>
            <slot></slot>
          </template>
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
    position: {
      type: String,
      default: 'bottom'
    }

  },
  data () {
    return {
      visible: this.value,
      mask: true
    }
  },
  mounted () {
    if (this.position === 'top') {
      this.mask = false
    }
  },
  methods: {
    actionEvent (callback) {
      this.$emit('input', !this.visible)
      callback()
    },
    maskEvent () {
     this.$emit('input', !this.visible)
    }
  },
  watch: {
    value (flag) {
      this.visible = flag
      if (flag) {
        this.$nextTick(() => {
          let index = ++window.muiZIndex
          let instance = this.$refs.popup
          instance.style.zIndex = index + 2
          if (instance.children.length > 1) {
            instance.children[0].style.zIndex = index
            instance.children[1].style.zIndex = index + 1
          }
          if (this.position === 'top' && this.visible) {
            setTimeout(() => {
              this.$emit('input', !this.visible)
            }, 2200)
          }
        })
      }
    }
  }
}
</script>
 
<style lang='scss' scoped>
.mui-popup {
  .mui-popup-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
  }
  .mui-popup-wrapper {
    position: fixed;
    left: 0;
    width: 100%;
    font-size: 18px;
    text-align: center;
    background-color: #fff;
    transition: .3s;
    .mui-popup-right {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      background-color: #fff;
    }
  }
  .popup-bottom {
    bottom: 0;
  }
  .popup-right {
    height: 100%;
    bottom: 0;
  }
  .popup-top {
    top: 0;
    background: rgba(0, 0, 0, .6);
  }
}
 .mui-popup-pop-enter-active {
  .popup-bottom {
    transform: translate3d(0, 100%, 0)
  }
  .popup-right {
    transform: translate3d(100%, 0, 0)
  }
  .popup-top {
    transform: translate3d(0, -100%, 0)
  }
}
.mui-popup-pop-leave-active {
  transition: .3s;
  .popup-bottom {
    transform: translate3d(0, 100%, 0)
  }
  .popup-right {
    transform: translate3d(100%, 0, 0)
  }
  .popup-top {
    transform: translate3d(0, -100%, 0)
  }
}
</style>