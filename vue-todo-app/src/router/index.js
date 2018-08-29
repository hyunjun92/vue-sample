import Vue from 'vue'
import Router from 'vue-router'
import todoApp from '@/components/todoApp'
import todoRestful from '@/components/todoApp-restful'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todoApp',
      component: todoApp
    },
    {
      path: '/todoRestful',
      name: 'todoRestful',
      component: todoRestful
    }
  ]
})
