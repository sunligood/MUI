<template>
  <div>
    <m-header title="标题" :fixed="false">
      <span slot="left" @click="back">
        <i class="mui mui-back"></i>
      </span>
      <span slot="right">
        <i class="mui mui-home"></i>
      </span>
    </m-header>
    <br/>
    <m-header title="标题" :fixed="false">
      <span slot="left" @click="customL">自定义</span>
      <span slot="right" @click="customR">自定义</span>
    </m-header>
    <br/>

    <m-header title="标题很长很长很长会被隐藏会被隐藏标题很长很长很长会被隐藏会被隐藏" :fixed="false"></m-header>
    <br/>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    customL () {
      this.$toast('自定义 Left')
    },
    customR () {
      this.$toast('自定义 Right')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

