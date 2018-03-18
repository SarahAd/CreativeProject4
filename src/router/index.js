import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Paintings from '@/components/Paintings'
import Photography from '@/components/Photography'
import Writings from '@/components/Writings'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
   routes: [
  {
      path: '/',
      name: 'HomePage',
      component: HomePage
  },
  {
      path: '/about',
      name: 'About',
      component: About
  },
  {
      path: '/paintings',
      name: 'Paintings',
      component: Paintings
  },
  {
      path: '/photography',
      name: 'Photography',
      component: Photography
  },
  {
      path: '/writings',
      name: 'Writings',
      component: Writings
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact
  }


    ]
})