import Vue from 'vue'
import toast from './toast.vue'
const ToastConstructor = Vue.extend(toast)
let toastPool = []
let getAnInstance = () => {
  if (toastPool.length) {
    let instance = toastPool[0]
    toastPool.splice(0, 1)
    return instance
  }
  return new ToastConstructor({
    el: document.createElement('div')
  })
}
let returnAnInstance = (instance) => {
  if (instance) {
    toastPool.push(instance)
  }
}
let addZIndex = (instance, index) => {
  instance.$el.style.zIndex = index + 1
}

let removDom = (event) => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
}
ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removDom)
  returnAnInstance(this)
}
let Toast = (options = {}) => {
  // 显示时长
  let time = options.time || 3000
  // 获取 toast实例对象
  let instance = getAnInstance()
  // 清除计时器
  clearTimeout(instance.timer)
  // 设置显示文字
  instance.message = typeof options === 'string' ? options : options.message
  // 添加class名
  instance.className = options.className || ''
  // 位置
  instance.position = options.position || 'bottom'
  // 显示toast
  instance.visible = true
  // 添加dom
  document.body.appendChild(instance.$el)
  addZIndex(instance, ++window.muiZIndex)
  // 自动删除
  instance.$el.removeEventListener('transitionend', removDom)
  Vue.nextTick(() => {
    instance.timer = setTimeout(() => {
      instance.close()
      // 执行回调函数
      if (options.callback) {
        options.callback()
      }
    }, time)
  })


  return Toast
}

export default Toast