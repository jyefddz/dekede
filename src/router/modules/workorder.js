import Layout from '@/layout'
export default {
  path: '/workorder',
  component: Layout,
  // component: () => import('@/views/workorder'),
  meta: { title: '工单管理', icon: 'gongdan' },
  children: [
    // {
    //   path: '',
    //   component: () => import('@/views/workorder'),
    //   meta: { title: '工单管理', icon: 'gongdan' }
    // },
    {
      path: 'operation',
      component: () => import('@/views/workorder/components/operation'),
      meta: { title: '运营工单' }
    },
    {
      path: 'maintenance',
      component: () => import('@/views/workorder/components/maintenance'),
      meta: { title: '运维工单' }
    }
  ]
}
