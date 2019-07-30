<template>
  <transition name="mui-alert-pop">
    <div class='mui-alert' v-show="visible">
      <div class="mui-alert-mask"></div>
      <div class="mui-alert-wrapper">
        <div class="mui-alert-title">{{title}}</div>
        <div class="mui-alert-content">{{message}}</div>
        <div class="mui-alert-btns" @click="confirmBtn">
          <span class="confirm">{{btnText}}</span>
        </div>
      </div>
  </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: String,
    btnText: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
      visible: false,
      callback: null
    }
  },
  methods: {
    confirmBtn () {
      this.callback()
    }
  }
}
</script>
 
<style lang='scss' scoped>
.mui-alert {
  .mui-alert-mask {
    z-index: 2000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
  }
  .mui-alert-wrapper {
    z-index: 2001;
    position: fixed;
    left: 50%;
    top: 50%;
    width: 85%;
    font-size: 16px;
    text-align: center;
    border-radius: 3px;
    background-color: #fff;
    transform: translate3d(-50%, -50%, 0);
    transition: .2s;
    .mui-alert-title {
      padding-top: 15px;
      font-weight: 700;
    }
    .mui-alert-content {
      padding: 20px;
      color: #999;
    }
    .mui-alert-btns {
      line-height: 40px;
      color: #26a2ff;
      border-top: 1px solid #ddd;
    }
  }
}
 .mui-alert-pop-enter-active, .mui-alert-pop-leave-active {
  transition: opacity .2s ease;
  .mui-alert-wrapper {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
}
.mui-alert-pop-enter, .mui-alert-pop-leave-to {
  opacity: 0;
  transition: opacity .2s ease;
  .mui-alert-wrapper {
    transform: translate3d(-50%, -50%, 0) scale(0.8);
  }
}
</style>