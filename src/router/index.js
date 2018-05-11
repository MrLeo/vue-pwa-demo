/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 14:00:26
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-11 09:54:58
 */
import Vue from 'vue'
import { LoadingBar } from 'iview'
import Router from 'vue-router'

Vue.use(Router)
LoadingBar.config({
  height: 5,
})

let router = new Router({
  // base: '/', // 应用的基路径
  mode: 'hash', // "hash" (URL hash 模式) | "history"(HTML5 History 模式) | "abstract" (Node.js 环境)
  scrollBehavior(to, from, savedPosition) {
    // console.log('router scrollBehavior=>', to, from, savedPosition)
    // 路由切换的滚动行为，只在 HTML5 history 模式下可用
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['../views/Main.vue'], resolve),
      redirect: '/home/index',
      children: (r => {
        // 去中心化
        // console.log('r', r); // __webpack_require__
        let sourceMap = []
        r.keys().map(key => {
          let rKey = r(key)
          sourceMap.push(...rKey.default)
          // console.log('key', key, rKey); // ./modules/home/route.js  // {default: Array(3), __esModule: true}
          return rKey
        })
        // console.log('sourceMap:', sourceMap)
        return sourceMap
      })(require.context('./', true, /^\.\/modules\/.*\.js$/)),
    },
  ],
})
router.beforeEach((to, from, next) => {
  // console.log('router beforeEach=>', to, from)
  LoadingBar.start()
  // 全局路由切换前执行
  // 是否有用户信息，并且用户ID是否存在
  // if (window.localStorage.getItem("loginInfo") && JSON.stringify(window.localStorage.getItem("loginInfo")).userId) {
  //     next({path: '/login'})//重定向到登录页面
  // } else {
  //     next()//正常跳转
  // }
  next()
})
router.afterEach(() => {
  //to, from
  // console.log('router afterEach=>', to, from)
  LoadingBar.finish()
})
export default router
