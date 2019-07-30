<template>
  <div class="d-button">
    <m-header title="Button" :fixed="false"></m-header>
    <br/>
    <div style="padding: 0 20px;">
      <m-button>primary</m-button>
      <br/>

      <m-button type="outline">outline</m-button>
      <br/>

      <m-button type="primary" disabled>disabled</m-button>
      <br/>

      <m-button type="default">default</m-button>
      <br/>
    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.d-button {
  text-align: center;
}
</style>

