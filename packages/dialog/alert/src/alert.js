import Vue from 'vue'
import alert from './alert.vue'

const AlertConstructor = Vue.extend(alert)
let getInstance = () => {
  return new AlertConstructor({
    el: document.createElement('div')
  })
}

let removDom = (event) => {
  event.target.remove();
}

AlertConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removDom)
}

let addZIndex = (instance, index) => {
  instance.$el.style.zIndex = index + 2
  if (instance.$el.children.length > 1) {
    instance.$el.children[0].style.zIndex = index
    instance.$el.children[1].style.zIndex = index + 1
  }
}
const Alert = (options = {}, callback) => {
  let instance = getInstance()

  instance.title = options.title || '提示'
  instance.message = typeof options === 'string' ? options : options.message
  instance.btnText = options.btnText || '确认'
  instance.visible = true
  addZIndex(instance, ++window.muiZIndex)
  document.body.appendChild(instance.$el)
  instance.callback = () => {
    instance.close()
    if (callback && typeof(callback) === 'function') {
      callback()
    }
  }
  return Alert
}
export default Alert