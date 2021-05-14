import Vue from 'vue'
import VueRouter from 'vue-router'

import ShowView from "@/components/ShowView"
import AddBlog from "@/components/AddBlog"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:ShowView
  },
  {
    path:'/add',
    component:AddBlog
  },
  {
    path:'/show',
    component:ShowView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
