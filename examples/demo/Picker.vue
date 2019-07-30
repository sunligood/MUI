<template>
  <div>
    <m-header title="Picker" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 20px">
      <m-button type="default" @click="bottomPop">下侧弹出 Picker</m-button>
      <br/>
    </div>
    <m-picker v-model="visibleBottom" :slots="slots" @change="pickerEvent" @confirm="confirm"></m-picker>
  </div>
</template>
<script>
export default {
  name: 'Picker',
  data () {
    return {
      visibleBottom: false,
      slots: [],
      answer: ['2018']
    }
  },
  mounted () {
    this.slots.push(
      {
        flex: 1,
        values: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2022', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037']
      },
      {
        divider: true,
        content: '-'
      },
      {
        flex: 1,
        values: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2022', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037']
      },
      {
        divider: true,
        content: '-'
      },
      {
        flex: 2,
        values: [
          {name: '北京', code: 'PEK'},
          {name: '重庆', code: 'PEK'},
          {name: '上海', code: 'PEK'},
          {name: '天津', code: 'PEK'},
          {name: '北京', code: 'PEK'},
          {name: '重庆', code: 'PEK'},
          {name: '上海', code: 'PEK'},
          {name: '天津', code: 'PEK'}
        ],
        valueKey: 'name'
      }
    )
  },
  methods: {
    bottomPop () {
      this.visibleBottom = true
    },
    pickerEvent (value, picker) {
      console.log(value)
      // this.answer = [value[1]]
      // picker.setSlotValues(0, this.answer)
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


