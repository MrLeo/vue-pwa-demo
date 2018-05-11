/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-05 00:33:23
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-10 18:27:38
 */
// import Vue from 'vue'
// import router from '../router'
import axios from 'axios'
import qs from 'qs' // 参数工具：https://github.com/ljharb/qs
import { LoadingBar } from 'iview'

LoadingBar.config({
  height: 5,
})

// #region config
// 每页条数
export const ROW = 10
// 加载最小时间
export const MINI_TIME = 300
// 超时时间（超时时间）
export const TIME_OUT_MAX = 10000
// 环境value
export const _env = process.env.NODE_ENV
// 请求组（判断当前请求数）
export const _requests = []
// #endregion

// #region 实例化axios
const _instance = axios.create({
  timeout: TIME_OUT_MAX,
})
// #endregion

let url = ''

// region request统一处理操作
_instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// POST传参序列化
_instance.interceptors.request.use(
  config => {
    url = config.url
    LoadingBar.start()
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    // console.log('%cconfig:', 'background-color:#00FFFF', config)
    return config
  },
  error => {
    LoadingBar.finish()
    // Notice.error({
    //   title: '错误的传参',
    //   desc: error.message
    // })
    return Promise.reject(new Error(`<p>错误的传参:${error.message || error}</p><p>url:${url}</p>`))
  },
)
// endregion

// region response统一处理操作
_instance.interceptors.response.use(
  res => {
    LoadingBar.finish()
    let _message = null
    if (res.status !== 200) {
      switch (res.status) {
        case 404:
          _message = '404,错误请求'
          break
        case 401:
          // router.push({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
          // localStorage.removeItem('user')
          _message = '未授权'
          break
        case 403:
          _message = '禁止访问'
          break
        case 408:
          _message = '请求超时'
          break
        case 500:
          _message = '服务器内部错误'
          break
        case 501:
          _message = '功能未实现'
          break
        case 503:
          _message = '服务不可用'
          break
        case 504:
          _message = '网关错误'
          break
        default:
          _message = '未知错误'
      }
      return Promise.reject(_message)
    } else {
      return res.data
    }
  },
  error => {
    LoadingBar.finish()
    // Notice.error({
    //   title: '网络异常',
    //   desc: `<p>${error.message || '服务器繁忙，请稍后重试'}</p><p>url:${url}</p>`
    // })
    return Promise.reject(new Error(`<p>${error.message || '服务器繁忙，请稍后重试'}</p><p>url:${url}</p>`))
  },
)
// endregion

export default _instance
