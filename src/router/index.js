import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/About'
import category from '@/components/Category'
import contact from '@/components/Contact'
import help from '@/components/Help'
import home from '@/components/Home'
import livechat from '@/components/LiveChat'
import question from '@/components/Question'

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
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/category/:catId',
      name: 'category',
      component: category
    },
    {
      path: '/question/:qnId',
      name: 'question',
      component: question
    },
    {
      path: '/livechat',
      name: 'livechat',
      component: livechat
    }
  ]
})
