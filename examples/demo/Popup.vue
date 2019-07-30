<template>
  <div>
    <m-header title="Popup" :fixed="false"></m-header>
    <br/>
    <div style="padding:0 20px">
      <m-button type="default" @click="topPop">上侧弹出 popup</m-button>
      <br/>
      <m-button type="default" @click="rightPop">右侧弹出 popup</m-button>
      <br/>
      <m-button type="default" @click="bottomPop">下侧弹出 popup</m-button>
      <br/>
    </div>
    <m-popup v-model="visibleTop" position="top">
      <div class="top-pop">
        更新成功， 2019年7月11日10:29:46
      </div>
    </m-popup>
    <m-popup v-model="visibleRight" position="right">
      <m-button type="default" @click="rightPopHide" class="right-pop">关闭右侧 popup</m-button>
    </m-popup>
    <m-popup v-model="visibleBottom" position="bottom">
      <div class="bottom-pop">
        <p v-for="item in 10">2019-07-{{item}}</p>
      </div>
    </m-popup>
  </div>
</template>
<script>
export default {
  name: 'Popup',
  data () {
    return {
      visibleTop: false,
      visibleRight: false,
      visibleBottom: false
    }
  },
  methods: {
    topPop () {
      this.visibleTop = true
    },
    rightPop () {
      this.visibleRight = true
    },
    bottomPop () {
      this.visibleBottom = true
    },
    rightPopHide () {
      this.visibleRight = false
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
.top-pop {
  overflow: auto;
  padding: 2px 0;
  height: 150px;
  line-height: 150px;
  font-size: 18px;
  color: #fff;
  p {
    padding: 4px 0;
  }
}
.right-pop {
  margin-top: 100px;
}
</style>


