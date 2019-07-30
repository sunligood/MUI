import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: r => require.ensure([], () => r(require('../components/Home')))
    },
    {
      path: '/toast',
      name: 'Toast',
      component: r => require.ensure([], () => r(require('../demo/Toast')))
    },
    {
      path: '/loading',
      name: 'Loading',
      component: r => require.ensure([], () => r(require('../demo/Loading')))
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: r => require.ensure([], () => r(require('../demo/Dialog')))
    },
    {
      path: '/actionsheet',
      name: 'Actionsheet',
      component: r => require.ensure([], () => r(require('../demo/Actionsheet')))
    },
    {
      path: '/popup',
      name: 'Popup',
      component: r => require.ensure([], () => r(require('../demo/Popup')))
    },
    {
      path: '/picker',
      name: 'Picker',
      component: r => require.ensure([], () => r(require('../demo/Picker')))
    },
    {
      path: '/datePicker',
      name: 'DatePicker',
      component: r => require.ensure([], () => r(require('../demo/DatePicker')))
    },
    {
      path: '/header',
      name: 'Header',
      component: r => require.ensure([], () => r(require('../demo/Header')))
    },
    {
      path: '/button',
      name: 'Button',
      component: r => require.ensure([], () => r(require('../demo/Button')))
    },
    {
      path: '/switch',
      name: 'SwitchBtn',
      component: r => require.ensure([], () => r(require('../demo/SwitchBtn')))
    },
    {
      path: '/loadmore',
      name: 'Loadmore',
      component: r => require.ensure([], () => r(require('../demo/Loadmore')))
    },
    {
      path: '/range',
      name: 'Range',
      component: r => require.ensure([], () => r(require('../demo/Range')))
    }
  ]
})