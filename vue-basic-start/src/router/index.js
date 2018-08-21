import Vue from 'vue';
import Router from 'vue-router';
import VueBasic from '@/components/VueBasic';
import VueRendering from '@/components/VueRendering';
import VueFor from '@/components/VueFor';
import VueHandling from '@/components/VueHandling';
import VueCompMain from '@/components/VueCompMain';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueBasic',
      component: VueBasic
    },
    {
      path: '/VueRendering',
      name: 'VueRendering',
      component: VueRendering
    },
    {
      path: '/VueFor',
      name: 'VueFor',
      component: VueFor
    },
    {
      path: '/VueHandling',
      name: 'VueHandling',
      component: VueHandling
    },
    {
      path: '/VueCompMain',
      name: 'VueCompMain',
      component: VueCompMain
    }
  ]
});
