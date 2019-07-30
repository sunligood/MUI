<template>
  <div>
    <m-header title="Switch" :fixed="false"></m-header>
    <br/>
    <div style="padding: 0 20px;">
      <div class="item">
        <m-switch v-model="isCheck"></m-switch>
         <span>选中值:{{isCheck}}</span>
      </div>
      <div class="item">
        <m-switch v-model="isCheck2"></m-switch>
         <span>选中值:{{isCheck2}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SwitchBtn',
  data () {
    return {
      isCheck: true,
      isCheck2: false
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>


