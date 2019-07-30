<template>
  <div class="mui-header" :class="{'is-fixed': fixed}">
    <div class="mui-header-left">
      <slot name="left">
        <i class="mui mui-back" @click="backEvent"></i>
      </slot>
    </div>
    <h1 class="mui-header-center" v-html="title"></h1>
    <div class="mui-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'm-header',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    title: {
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    backEvent () {
        this.$router.back()
    }
  }
}
</script>
 
<style lang='scss'>
 .mui-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 15px;
   height: 45px;
   font-size: 14px;
   background-color: #008FFF;
   color: #fff;
   &.is-fixed {
     z-index: 2000;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
   }
   .mui-header-center {
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     text-align: center;
     line-height: 24px;
     font-size: 18px;
   }
   i {
     font-size: 24px;
   }
 }
</style>