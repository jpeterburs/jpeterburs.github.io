import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
