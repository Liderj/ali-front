import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/pages/home/index')
const duiTang = () => import('@/pages/duitang/index')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/duitang',
      component: duiTang
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('解析' + new Date().getTime());
  next()
}
)
router.afterEach((to, from) => {
  console.log('结束' + new Date().getTime());

})

export default router
