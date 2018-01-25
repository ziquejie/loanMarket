import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/Manage'
import Borrow from '@/components/Borrow'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
