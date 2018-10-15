import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/lyindex/index')
    }]
  },
  {
    path: '/my',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'My',
        component: () => import('@/views/lymy/index'),
        // meta: { title: 'Form', icon: 'icon-xinfengtianchong' }
      }
    ]
  },
  {
    path: '/classify',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Classify',
        component: () => import('@/views/lyclist/index'),
        // meta: { title: 'Form', icon: 'icon-xinfengtianchong' }
      },
      // {
      //   path: '/classify/list',
      //   name: 'Cdetail',
      //   component: () => import('@/views/lyclist/index'),
      //   children: [

      //   ],
      // },
      {
        path: '/classify/list/goodsdetail',
        name: 'Cgoodsdetail',
        component: () => import('@/views/lyclistdetail/index'),
      }
    ]
  },
  {
    path: '/cart',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Cart',
        component: () => import('@/views/lycart/index'),
        // meta: { title: 'Form', icon: 'icon-xinfengtianchong' }
      }
    ]
  },
];
export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
