/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 14:00:07
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-10 18:28:30
 */
// import Vue from 'vue'
import { base } from '../mutation-types'

const state = {
  version: '',
  token: null,
  user: {
    id: '',
    name: '',
    pwd: '',
    photo: '',
  },
}

const getters = {
  versionGetter(state) {
    return state.version
  },
}

const mutations = {
  [base.userInfo](state, userInfo) {
    userInfo.id && (state.user.id = userInfo.id)
    userInfo.name && (state.user.name = userInfo.name)
    userInfo.pwd && (state.user.pwd = userInfo.pwd)
    userInfo.photo && (state.user.photo = userInfo.photo)
  },
}

const actions = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
