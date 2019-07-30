<template>
  <div>
    <m-header title="Loading" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 20px">
      <m-button type="default" @click="loading">默认 loading</m-button>
      <br/>
      <m-button type="default" @click="loadingMask">遮罩 loading</m-button>
      <br/>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name: 'Loading',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    loading () {
    this.$loading.open()
      setTimeout(() => {
        this.$loading.close()
      }, 4000)
    },
    loadingMask () {
      this.$loading.open({mask: true})
      setTimeout(() => {
        this.$loading.close()
      }, 4000)
    }
  }
}
</script>

