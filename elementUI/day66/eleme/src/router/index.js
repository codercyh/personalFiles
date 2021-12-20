import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      isLogin: true
    }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach(function (to, from, next) {
  if (to.path === '/') {
    next()
  } else {
    const loginInfo = localStorage.getItem('loginInfo')
    if (loginInfo) {
      next()
    } else {
      next({ path: '/' })
    }
  }
})
router.afterEach((to, from) => {
  if (to.path === '/about') {
    console.log('about页面加载完成')
  }
})

export default router
