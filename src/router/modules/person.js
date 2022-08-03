import Layout from '@/layout'
export default {
  path: '/person',
  component: Layout,
  meta: { title: '人员管理', icon: 'renyuanguanli' },
  children: [
    // {
    //   path: '',
    //   component: () => import('@/views/person'),
    //   meta: { title: '人员管理', icon: 'renyuanguanli' }
    // },
    {
      path: 'list',
      component: () => import('@/views/person/components/list'),
      meta: { title: '人员列表' }
    },
    {
      path: 'statistics',
      component: () => import('@/views/person/components/statistics'),
      meta: { title: '人校统计' }
    },
    {
      path: 'workload',
      component: () => import('@/views/person/components/workload'),
      meta: { title: '工作量列表' }
    },
  ]
}
