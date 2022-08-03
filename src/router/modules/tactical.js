import Layout from '@/layout'
export default {
  path: '/tactical',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/tactical'),
      meta: { title: '策略管理', icon: 'dengpao' }
    }
  ]
}
