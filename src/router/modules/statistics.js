import Layout from '@/layout'
export default {
  path: '/statistics',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/equipment'),
      meta: { title: '对账统计', icon: 'zhangdan_o' }
    }
  ]
}
