import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hot',
    component: resolve => require(['@/pages/home'], resolve)
    // children: [{
    //   path: 'newlist',
    //   component: resolve => require(['@/pages/childrenList'], resolve)
    // }],
    // redirect: '/newlist'
  },
  {
    path: '/search',
    component: resolve => require(['@/pages/search'], resolve)
  },
  {
    path: '/news_tech',
    component: resolve => require(['@/pages/news_tech'], resolve)
  },
  {
    path: '/news_sports',
    component: resolve => require(['@/pages/news_sports'], resolve)
  },
  {
    path: '/news_game',
    component: resolve => require(['@/pages/news_game'], resolve)
  }
]

const router = new VueRouter({
  routes
})

export default router
