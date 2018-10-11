const duiTang = () => import('@/pages/duitang/index')
const serach = () => import('@/pages/duitang/serach')

export default [
  {
    path: '/duiTang',
    component: duiTang,
  },
  {
    path: '/duiTang/serach',
    component: serach
  }
]