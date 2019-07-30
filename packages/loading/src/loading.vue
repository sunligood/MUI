<template>
  <div class="mui-loading" v-show="visible">
    <div class="mui-loading-mask" v-show="mask"></div>
    <div class="mui-loading-wrapper">
      <span class="mui-loading-spin"></span>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      visible: false,
      // 遮罩
      mask: false
    }
  }
}
</script>
 
<style lang='scss'>
.mui-loading {
  .mui-loading-wrapper {
    z-index: 3000;
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 15px;
    border-radius: 5px;
    opacity: 0.7;
    color: #fff;
    background-color: #000;
    transform: translate(-50%, -50%);
    .mui-loading-spin {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-left: 5px #fff solid;
      border-right: 5px #fff solid;
      border-top: 5px #fff solid;
      border-bottom: 5px transparent solid;
      border-radius: 50%;
      animation: loading 1s linear;
      animation-iteration-count: infinite;
    }
    @keyframes loading {
      from {
        transform: rotate(0)
      }
      to {
        transform: rotate(360deg)
      }
    }
  }
  .mui-loading-mask {
    z-index: 3000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
     opacity: .1;
  }
  
}
</style>