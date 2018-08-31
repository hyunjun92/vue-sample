import Vue from 'vue'
import Router from 'vue-router'
import exampleTable from '@/components/exampleTable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'exampleTable',
      component: exampleTable
    }
  ]
})
