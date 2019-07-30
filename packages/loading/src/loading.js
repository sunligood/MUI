import Vue from 'vue'
import loading from './loading.vue'

const loadingConstructor = Vue.extend(loading)

let instance
export default {
  open (options = {}) {
    if (!instance) {
      instance = new loadingConstructor({
        el: document.createElement('div')
      });
    }
    // 是否启用遮罩 默认启用
    instance.mask = options.mask || false
    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
      instance.visible = true
    })
  },
  close () {
    instance.visible = false
  }
}