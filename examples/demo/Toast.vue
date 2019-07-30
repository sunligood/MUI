<template>
  <div>
    <m-header title="Toast" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 20px">
      <m-button type="default" @click="toast">默认 Toast</m-button>
      <br/>
      <m-button type="default" @click="toast2">自定义 Toast</m-button>
      <br/>
      <m-button type="default" @click="toast3">Toast回调</m-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  data () {
    return {
    }
  },
  methods: {
    toast () {
      this.$toast('默认 Toast')
    },
    toast2 () {
      this.$toast({message: '自定义 toast', position: 'middle'})
    },
    toast3 () {
      this.$toast({message: '自定义 toast', callback: () => {
        this.$toast({message: 'toast callback !', position: 'middle'})
      }})
    }
  }
}
</script>

