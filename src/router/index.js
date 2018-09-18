import Vue from 'vue'
import Router from 'vue-router'
import wangYi from './wangyi.js'
import duitang from './duitang.js'
import diary from './diary.js'



const home = () => import('@/pages/home/index')
const pageList = () => import('@/pages/home/pageList')


let manRouts = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/pageList',
    component: pageList
  }
]

Vue.use(Router)

const router = new Router({
  routes: [...manRouts, ...duitang, ...wangYi, ...diary]
})
router.beforeEach((to, from, next) => {
  next()
})
router.beforeResolve((to, from, next) => {
  next()
}
)
router.afterEach((to, from) => {
})

export default router
