import Layout from '@/layout'
export default {
  path: '/equipment',
  component: Layout,
  meta: { title: '设备管理', icon: 'shebei' },
  children: [
    // {
    //   path: '',
    //   component: () => import('@/views/equipment'),
    //   meta: { title: '设备管理', icon: 'shebei' }
    // },
    {
      path: 'equipment',
      component: () => import('@/views/equipment/components/equipment'),
      meta: { title: '设备管理' }
    },
    {
      path: 'status',
      component: () => import('@/views/equipment/components/status'),
      meta: { title: '设备状态' }
    },
    {
      path: 'type',
      component: () => import('@/views/equipment/components/type'),
      meta: { title: '设备类型管理' }
    }
  ]
}
