import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'

import VueMomentLib from 'vue-moment-lib'

import noticeBoard from '@/components/noticeBoard'

Vue.use(VueMomentLib);
Vue.use(Router)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/noticeBoard',
      name: 'noticeBoard',
      component: noticeBoard
    }
  ]
})
