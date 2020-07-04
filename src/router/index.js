import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@/pages/home'], resolve),
    children: [{
      path: 'newlist',
      component: resolve => require(['@/pages/childrenList'], resolve)
    }],
    redirect: '/newlist'
  }, {
    path: '/search',
    component: resolve => require(['@/pages/search'], resolve)
  }

]

const router = new VueRouter({
  routes
})

export default router
