<template>
  <transition name="mui-confirm-pop">
    <div class='mui-confirm' v-show="visible">
      <div class="mui-confirm-mask"></div>
      <div class="mui-confirm-wrapper">
        <div class="mui-confirm-title">{{title}}</div>
        <div class="mui-confirm-content">{{message}}</div>
        <div class="mui-confirm-btns">
          <span class="cancel" v-show="showCancelBtn"  @click="cancelBtn">{{cancelBtnText}}</span>
          <span class="confirm" v-show="showConfirmlBtn"  @click="confirmBtn">{{confirmBtnText}}</span>
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
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    showConfirmlBtn: {
      type: Boolean,
      default: true
    },
    confirmBtnText: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
      visible: false,
      confirmEvent: null,
      cancelEvent: null
    }
  },
  methods: {
    confirmBtn () {
      this.confirmEvent()
    },
    cancelBtn () {
      this.cancelEvent()
    }
  }
}
</script>
 
<style lang='scss' scoped>
.mui-confirm {
  .mui-confirm-mask {
    z-index: 2000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
  }
  .mui-confirm-wrapper {
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
    .mui-confirm-title {
      padding-top: 15px;
      font-weight: 700;
    }
    .mui-confirm-content {
      padding: 20px;
      color: #999;
    }
    .mui-confirm-btns {
      display: flex;
      justify-content: space-between;
      line-height: 40px;
      border-top: 1px solid #ddd;
      span {
        flex: 1;
      }
      .cancel {
        border-right: 1px solid #ddd;
        color: #333;
      }
      .confirm {
        color: #26a2ff;
      }
    }
  }
}
 .mui-confirm-pop-enter-active, .mui-confirm-pop-leave-active {
  transition: opacity .2s ease;
  .mui-confirm-wrapper {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
}
.mui-confirm-pop-enter, .mui-confirm-pop-leave-to {
  opacity: 0;
  transition: opacity .2s ease;
  .mui-confirm-wrapper {
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
}
</style>