<template>
  <transition name="mui-prompt-pop">
    <div class='mui-prompt' v-show="visible">
      <div class="mui-prompt-mask"></div>
      <div class="mui-prompt-wrapper">
        <div class="mui-prompt-title">{{title}}</div>
        <div class="mui-prompt-content">
          <input :type="inputType" v-model="inputMessage" class="input-msg">
        </div>
        <div class="mui-prompt-btns">
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
    },
    inputType: {
      type: String,
      default: 'text'
    },
  },
  data () {
    return {
      inputMessage: '',
      visible: false,
      confirmEvent: null,
      cancelEvent: null
    }
  },
  methods: {
    confirmBtn () {
      this.confirmEvent(this.inputMessage)
    },
    cancelBtn () {
      this.cancelEvent()
    }
  }
}
</script>
 
<style lang='scss' scoped>
.mui-prompt {
  .mui-prompt-mask {
    z-index: 2000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
  }
  .mui-prompt-wrapper {
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
    .mui-prompt-title {
      padding-top: 15px;
      font-weight: 700;
    }
    .mui-prompt-content {
      padding: 20px;
      color: #999;
      .input-msg {
        width: 100%;
        height: 25px;
        border: 1px solid #dedede;
        border-radius: 5px;
        outline: none;
      }
    }
    .mui-prompt-btns {
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
 .mui-prompt-pop-enter-active, .mui-prompt-pop-leave-active {
  transition: opacity .2s ease;
  .mui-prompt-wrapper {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
}
.mui-prompt-pop-enter, .mui-prompt-pop-leave-to {
  opacity: 0;
  transition: opacity .2s ease;
  .mui-prompt-wrapper {
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
}
</style>