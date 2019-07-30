import loading from '../loading/index'
import toast from '../toast/index'
import dialog from '../dialog/index'

import header from '../header/index'
import button from '../button/index'
import switchBtn from '../switchBtn/index'
import loadmore from '../loadmore/index'
import range from '../range/index'
import actionsheet from '../actionsheet/index'
import popup from '../popup/index'
import picker from '../picker/index'
import datePicker from '../datePicker/index'

// font-css
import '../src/assets/font/iconfont.css'
// global z-index
window.muiZIndex = 2000

const install = (Vue) => {
  Vue.component('m-header', header)
  Vue.component('m-button', button)
  Vue.component('m-switch', switchBtn)
  Vue.component('m-loadmore', loadmore)
  Vue.component('m-actionsheet', actionsheet)
  Vue.component('m-range', range)
  Vue.component('m-popup', popup)
  Vue.component('m-picker', picker)
  Vue.component('m-date-picker', datePicker)
  Vue.$toast = Vue.prototype.$toast = toast
  Vue.$loading = Vue.prototype.$loading = loading
  Vue.$alert = Vue.prototype.$alert = dialog.alert
  Vue.$confirm = Vue.prototype.$confirm = dialog.confirm
  Vue.$prompt = Vue.prototype.$prompt = dialog.prompt
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  header,
  button,
  switchBtn,
  loadmore,
  range,
  actionsheet,
  popup,
  picker,
  datePicker
}