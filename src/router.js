//路由页面

import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import List from '@/components/List.vue'
import Detail from '@/components/Detail.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/league/:name',
      name: 'Detail',
      component: Detail
    },
  ]
})