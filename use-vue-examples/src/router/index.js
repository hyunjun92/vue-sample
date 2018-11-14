import Vue from 'vue'
import Router from 'vue-router'

import noticeBoard from '@/components/noticeBoard'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/noticeBoard',
      name: 'noticeBoard',
      component: noticeBoard
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
