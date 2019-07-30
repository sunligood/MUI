<template>
  <div>
    <m-header title="Date Picker" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 20px">
      <m-button type="default" @click="bottomPop">下侧弹出 Date Picker</m-button>
      <br/>
    </div>
    <m-date-picker 
      v-model="visibleBottom" 
      type="date" 
      yearFormat="年"
      monthFormat="月"
      dayFormat="日"
      hoursFormat="时"
      @confirm="confirm"></m-date-picker>
  </div>
</template>
<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      visibleBottom: false
    }
  },
  methods: {
    bottomPop () {
      this.visibleBottom = true
    },
    confirm (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-pop {
  overflow: auto;
  padding: 2px 0;
  height: 150px;
  font-size: 18px;
  p {
    padding: 4px 0;
  }
}
</style>


