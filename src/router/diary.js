const Index = () => import('@/pages/diary/index')
const diaryDetail = () => import('@/pages/diary/diaryInfo')

export default [
  {
    path: '/diary',
    component: Index,
    // child: []
  },
  {
    path: '/diary/:id',
    component: diaryDetail,
  }
]