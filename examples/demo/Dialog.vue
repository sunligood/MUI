<template>
  <div>
    <m-header title="Dialog" :fixed="false"></m-header>
    <br/>
    <div style="padding: 0 20px;">
      <m-button type="default" @click="Alert">Alert</m-button>
      <br/>

      <m-button type="default" @click="Confirm">Confirm</m-button>
      <br/>

      <m-button type="default" @click="Prompt">Prompt</m-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  data () {
    return {
    }
  },
  methods: {
    Alert () {
      this.$alert('默认 Alert', () => {
        this.$toast('确认')
      })
    },
    Confirm () {
      this.$confirm('默认 Confirm', (actions) => {
        this.$toast({message: actions ? '确认' : '取消'})
      })
    },
    Prompt () {
      this.$prompt({title: '请输入内容', confirmBtnText: '我想好了'}, (actions, inputMessage) => {
        this.$toast({message: actions ? '确认: ' + inputMessage : '取消'})
      })
    }
  }
}
</script>

