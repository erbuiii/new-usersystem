import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
      	{
      		path: '/dashboard',
      		component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: { title: '系统首页' }
      	},
      	{
      		path: '/table',
      		component: resolve => require(['../components/page/UserTable.vue'], resolve),
          meta: { title: '基础表格' }
      	},
        {
          path: '/charts',
          component: resolve => require(['../components/page/Charts.vue'], resolve),
          meta: { title: '图表' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    }
    
  ]
})
