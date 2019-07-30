<template>
  <transition name="mui-toast-pop">
    <div class="mui-toast" v-show="visible" :class="customClass">
      <span class="mui-toast-text">{{message}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: {
      type: String
    },
    className: {
      type: String
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    customClass() {
      let classList = []
      switch (this.position) {
        case 'top':
          classList.push('is-placetop')
          break
        case 'middle':
          classList.push('is-placemiddle')
          break
        default:
          classList.push('is-placebottom')
          break
      }
      classList.push(this.className)
      return classList.join(' ')
    }
  }
}
</script>
<style lang="scss">
.mui-toast {
  position: fixed;
  width: 100%;
  text-align: center;
  background: transparent;
  color: #fff;
  .mui-toast-text {
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    word-break: break-all;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
.mui-toast-pop-enter-active, .mui-toast-pop-leave-active {
  transition: opacity 0.2s ease;
}
.mui-toast-pop-enter, .mui-toast-pop-leave-to {
  opacity: 0;
}
.mui-toast.is-placetop {
  left: 50%;
  top: 100px;
  transform: translate(-50%);
}
.mui-toast.is-placemiddle {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mui-toast.is-placebottom {
  left: 50%;
  bottom: 50px;
  transform: translate(-50%);
}
</style>

