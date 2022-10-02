import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/About'
import Projects from '@/views/Projects'
import Contact from '@/views/Contact'

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
