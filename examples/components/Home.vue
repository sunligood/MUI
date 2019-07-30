<template>
  <div class="home">
    <ul>
      <li v-for="item in data" :key="item.title">
        <p class="title">{{item.title}}</p>
        <div
          class="component"
          v-for="component in item.list"
          :key="component.name"
          @click="selFun(component.name)"
        >{{component.text ? component.text : component.name}}</div>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'JS COMPONENTS', list: [
            { name: 'Toast'},
            { name: 'Loading' },
            { name: 'Dialog' },
            { name: 'Actionsheet' },
            { name: 'Loadmore' },
            { name: 'Popup' },
            { name: 'Picker' },
            { name: 'DatePicker', text: 'Date Picker' },
            { name: 'Range' }
          ]
        },
        {
          title: 'CSS COMPONENTS', list: [
            { name: 'Header' },
            { name: 'Button' },
            { name: 'SwitchBtn', text: 'Switch' }
          ]
        }
      ]
    }
  },
  methods: {
    selFun(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  ul {
    li {
      cursor: pointer;
      .title {
        line-height: 40px;
        text-align: center;
        background-color: #f2f2f2;
      }
      .component {
        line-height: 25px;
        padding: 10px 20px;
        border-bottom: 1px solid #f2f2f2;
      }
    }
  }
}
</style>

