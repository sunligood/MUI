<template>
  <div>
    <m-header title="Loadmore"></m-header>
    <div class="title">
    </div>
    <div>
      <m-loadmore class="loadmore-wrapper"
        :allLoaded="allLoaded"
        @topMethod="topMethod"
        @bottomMethod="bottomMethod"
      >
        <ul class="list">
          <li v-for="(count, index) in counts">
            <img :src="url">
            <span>{{index}}</span>
          </li>
        </ul>
        <div slot="top">
          下拉刷新
        </div>
        <div slot="bottom">
          上拉加载更多
        </div>
      </m-loadmore>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loadmore',
  data () {
    return {
      url: require('../assets/image/logo.png'),
      counts: 20,
      allLoaded: false
    }
  },
  methods: {
    topMethod () {
      this.$loading.open({mask: true})
        setTimeout(() => {
        this.counts =20
        this.$loading.close()
      }, 500)
    },
    bottomMethod () {
      this.$loading.open({mask: true})
      setTimeout(() => {
        this.counts = this.counts + 5
        this.$loading.close()
      }, 500)
    }
  }
}
</script>
<style scoped>
.title {
  height: 100px;
}
.loadmore-wrapper {
  bottom: 0;
  height: calc(100% - 45px);
  border-left: 0;
  border-right: 0;
}
.list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: 1px solid #f2f2f2;
}
.list li img {
  width: 40px;
}
</style>


