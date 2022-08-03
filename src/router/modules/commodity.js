import Layout from '@/layout'
export default {
  path: '/commodity',
  component: Layout,
  meta: { title: '商品管理', icon: 'pintu' },
  children: [
    // {
    //   path: '',
    //   component: () => import('@/views/commodity'),
    //   meta: { title: '商品管理', icon: 'pintu' }
    // },
    {
      path: 'type',
      component: () => import('@/views/commodity/components/type'),
      meta: { title: '商品类型' }
    },
    {
      path: 'commodity',
      component: () => import('@/views/commodity/components/commodity'),
      meta: { title: '商品管理' }
    }
  ]
}
