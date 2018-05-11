/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 14:00:07
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-11 16:32:47
 */

// import Vue from 'vue'

const state = {
  list: [],
}

const getters = {}

const mutations = {
  ADD_TODO(state, todo) {
    state.list.push(todo)
  },
  DEL_TODO(state, index) {
    state.list.splice(index, 1)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
