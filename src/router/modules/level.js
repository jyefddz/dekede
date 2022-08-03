import Layout from '@/layout'
export default {
  path: '/level',
  component: Layout,
  meta: { title: '点位管理', icon: 'dingwei' },
  children: [
    // {
    //   path: '',
    //   component: () => import('@/views/level'),
    //   meta: { title: '点位管理', icon: 'dingwei' }
    // },
    {
      path: 'area',
      component: () => import('@/views/level/components/area'),
      meta: { title: '区域管理' }
    },
    {
      path: 'level',
      component: () => import('@/views/level/components/level'),
      meta: { title: '点位管理' }
    },
    {
      path: 'partner',
      component: () => import('@/views/level/components/partner'),
      meta: { title: '合作商管理' }
    }
  ]
}
