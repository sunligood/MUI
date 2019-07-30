<template>
  <transition name="mui-actionsheet-pop">
    <div class='mui-actionsheet' v-if="visible" ref="actionsheet">
      <div class="mui-actionsheet-mask" @click="maskEvent"></div>
        <div class="mui-actionsheet-wrapper">
          <div v-for="action in actions" 
              :key="action.name"
              class="mui-actionsheet-item"
              @click="actionEvent(action.methods)">{{action.name}}</div>
          <div class="mui-actionsheet-item mui-actionsheet-btns" v-if="cancelText" @click="cancelEvent">{{cancelText}}</div>
        </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    actions: {
      type: Array,
      default: () => {
        return null
      }
    },
    value: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },

  },
  data () {
    return {
      visible: this.value
    }
  },
  methods: {
    actionEvent (callback) {
      this.$emit('input', !this.visible)
      callback()
    },
    maskEvent () {
     this.$emit('input', !this.visible)
    },
    cancelEvent () {
      this.$emit('input', !this.visible)
      this.$emit('cance')
    }
  },
  watch: {
    value (flag) {
      this.visible = flag
      if (flag) {
        this.$nextTick(() => {
          let index = ++window.muiZIndex
          let instance = this.$refs.actionsheet
          instance.style.zIndex = index + 2
          if (instance.children.length > 1) {
            instance.children[0].style.zIndex = index
            instance.children[1].style.zIndex = index + 1
          }
        })
      }
    }
  }
}
</script>
 
<style lang='scss' scoped>
.mui-actionsheet {
  .mui-actionsheet-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
  }
  .mui-actionsheet-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 18px;
    text-align: center;
    background-color: #fff;
    transition: .3s;
    .mui-actionsheet-item {
      height: 45px;
      line-height: 45px;
      color: #333;
      border-bottom: 1px solid #e0e0e0;
    }
    .mui-actionsheet-btns {
      border-top: 5px solid #e0e0e0;
      border-bottom: 0;
    }
  }
}
 .mui-actionsheet-pop-enter-active {
  .mui-actionsheet-wrapper {
    transform: translate3d(0, 100%, 0)
  }
}
.mui-actionsheet-pop-leave-active {
  transition: .3s;
  .mui-actionsheet-wrapper {
    transform: translate3d(0, 100%, 0)
  }
}
</style>