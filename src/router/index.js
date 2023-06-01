import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/About'
import Projects from '@/views/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
