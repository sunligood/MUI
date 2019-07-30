<template>
  <div>
    <m-header title="Range" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 5px">
      <div class="item">
        <label>默认: {{rangeVal}}</label>
        <div class="range">
          <m-range v-model="rangeVal"></m-range>
        </div>
      </div>
      <div class="item">
        <label>预设: {{rangeVal1}}</label>
        <div class="range">
          <m-range v-model="rangeVal1" :min="0" :max="100"></m-range>
        </div>
      </div>
      <div class="item">
        <label>左右文字: {{rangeVal2}}</label>
        <div class="range">
          <m-range v-model="rangeVal2">
            <div slot="start">0</div>
            <div slot="end">100</div>
          </m-range>
        </div>
      </div>
      <div class="item">
        <label>设置区间: {{rangeVal3}}</label>
        <div class="range">
          <m-range v-model="rangeVal3" :min="10" :max="100">
          </m-range>
        </div>
      </div>
      <div class="item">
        <label>设置步长: {{rangeVal4}}</label>
        <div class="range">
          <m-range v-model="rangeVal4" :min="0" :max="100" :step="20">
          </m-range>
        </div>
      </div>
       <div class="item">
        <label>设置线高: {{rangeVal5}}</label>
        <div class="range">
          <m-range v-model="rangeVal5" :height="5"></m-range>
        </div>
      </div>
      <div class="item">
        <label>区间滑块: {{rangeVal6}}</label>
        <div class="range">
          <m-range v-model="rangeVal6" :section="true"></m-range>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Range',
  data () {
    return {
      rangeVal: 0,
      rangeVal1: 10,
      rangeVal2: 0,
      rangeVal3: 50,
      rangeVal4: 0,
      rangeVal5: 0,
      rangeVal6: [0, 100]
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
  margin-top: 20px;
  font-size: 14px;
  color: #888;
}
.item label {
  flex: .6;
}
.item .range {
  flex: 1;
}
</style>


