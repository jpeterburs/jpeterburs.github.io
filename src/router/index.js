import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'about',
      path: '/',
      component: About
    },
    {
      name: 'projects',
      path: '/projects',
      component: Projects
    },
    {
      name: 'contact',
      path: '/contact',
      component: Contact
    }
  ]
})
