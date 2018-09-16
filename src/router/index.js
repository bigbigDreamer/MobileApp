import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/start'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Start
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
