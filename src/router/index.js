import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/About'
import help from '@/components/Help'
import home from '@/components/Home'
import livechat from '@/components/LiveChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/livechat',
      name: 'livechat',
      component: livechat
    }
  ]
})
