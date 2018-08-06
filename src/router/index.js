import Vue from 'vue'
import Router from 'vue-router'

const home = ()=>import('@/pages/home/index')
const duiTang = ()=>import('@/pages/duitang/index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/duitang',
      component:duiTang
    }
  ]
})
