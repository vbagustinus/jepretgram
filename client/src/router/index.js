import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Caption from '@/components/Caption'
import AddCaption from '@/components/AddCaption'
import BodyCaption from '@/components/BodyCaption'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BodyCaption',
      component: BodyCaption,
      children: [
        {
          path: '',
          name: 'Caption',
          component: Caption
        },
        {
          path: '/add',
          name: 'AddCaption',
          component: AddCaption
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
