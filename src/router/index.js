import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: resolve => require(['@/pages/index'], resolve),
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: resolve => require(['@/pages/Home'], resolve),
    children: [{
      path: '/home/news_tech',
      component: resolve => require(['@/pages/news_tech'], resolve)
    }, {
      path: '/home/news_sports',
      component: resolve => require(['@/pages/news_sports'], resolve)
    }, {
      path: '/home/news_game',
      component: resolve => require(['@/pages/news_game'], resolve)
    }, {
      path: '/home/news_hot',
      component: resolve => require(['@/pages/hot'], resolve)
    }]
  },
  {
    path: '/search',
    component: resolve => require(['@/pages/search'], resolve)
  }
]

const router = new VueRouter({
  routes
})

export default router
