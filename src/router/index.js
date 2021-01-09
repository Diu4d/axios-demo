import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home')

Vue.use(VueRouter)

const routes = [
  {
    redirect:'/home',
    path:''
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
