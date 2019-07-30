<template>
  <div>
    <m-header title="Action Sheet" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 20px">
      <m-button type="default" @click="actionCancel">点击 Action sheet</m-button>
      <br/>
      <m-button type="default" @click="action">不带取消按钮 Action sheet</m-button>
    </div>
    <m-actionsheet v-model="visible" :actions="actions" :cancelText="cancelText"></m-actionsheet>
  </div>
</template>
<script>
export default {
  name: 'Actionsheet',
  data () {
    return {
      visible: false,
      actions: [
        {name: '拍照', methods: this.photos},
        {name: '拨电话', methods: this.phone}
      ],
      cancelText: ''
    }
  },
  methods: {
    action () {
      this.cancelText = ''
      this.visible = true
    },
    actionCancel () {
      this.cancelText = '点我取消'
      this.visible = true
    },
    photos () {
      this.$toast('让我拍一张照片吧~')
    },
    phone () {
      this.$toast('沟通~')
    }
  }
}
</script>

