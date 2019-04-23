// router是定义路由相关的配置
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/index'
import Admin from '@/components/admin'
import student from '@/components/stutent'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/admin', component: Admin },
    { path: '/student', component: student },
    { path: '/video', component: Video },
 
  ]
})
