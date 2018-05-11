/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 13:59:37
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-10 18:28:05
 */
// import Vue from 'vue'
import { system } from './mutation-types.js'

export default {
  [system.setAutoRefresh](state, rate) {
    state.refreshRate = rate || ''
  },
}
