import Vue from 'vue'
import confirm from './confirm.vue'

const ConfirmConstructor = Vue.extend(confirm)
let getInstance = () => {
  return new ConfirmConstructor({
    el: document.createElement('div')
  })
}

let removDom = (event) => {
  event.target.remove();
}

ConfirmConstructor.prototype.close = function () {
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
const Confirm = (options = {}, callback) => {
  let instance = getInstance()
  document.body.appendChild(instance.$el)

  instance.title = options.title || '提示'
  instance.message = typeof options === 'string' ? options : options.message
  instance.showCancelBtn = options.showCancelBtn === undefined || options.showCancelBtn === true ? true : false
  instance.showConfirmlBtn = options.showConfirmlBtn === undefined || options.showConfirmlBtn === true ? true : false
  instance.cancelBtnText = options.cancelBtnText || '取消'
  instance.confirmBtnText = options.confirmBtnText || '确认'

  instance.visible = true

  addZIndex(instance, ++window.muiZIndex)

  instance.confirmEvent = () => {
    instance.close()
    if (callback && typeof(callback) === 'function') {
      callback(1)
    }
  }
  instance.cancelEvent = () => {
    instance.close()
    if (callback && typeof(callback) === 'function') {
      callback(0)
    }
  }
  return Confirm
}
export default Confirm