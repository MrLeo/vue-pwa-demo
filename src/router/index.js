/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 14:00:26
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-11 16:25:33
 */
import Vue from 'vue'
import { LoadingBar } from 'iview'
import Router from 'vue-router'

Vue.use(Router)
LoadingBar.config({
  height: 5,
})

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../views/Home.vue'], resolve),
    },
    {
      path: '/',
      name: 'about',
      component: resolve => require(['../views/About.vue'], resolve),
    },
  ],
})
export default router
