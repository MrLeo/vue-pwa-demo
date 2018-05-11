/*
 * @Author: Leo - xuebin.me 
 * @Date: 2018-05-11 16:11:36 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-11 16:31:37
 */
let types = {
  ...(r => {
    // 去中心化
    let sourceMap = {
      mutations: {},
      actions: {},
    }
    r.keys().map(key => {
      let rKey = r(key)
      console.log('​-----------')
      console.log('​rKey', rKey, key)
      console.log('​-----------')
      let newKey = key.replace(/^\.\/modules\/(.*)\.js$/g, '$1')
      let namespaced = rKey.default.namespaced ? `${newKey}/` : ''
      sourceMap.mutations[newKey] = {}
      sourceMap.actions[newKey] = {}
      for (let key in rKey.default.mutations) {
        sourceMap.mutations[newKey][key] = `${namespaced}${key}`
      }
      for (let key in rKey.default.actions) {
        sourceMap.actions[newKey][key] = `${namespaced}${key}`
      }
      return rKey.default
    })
    return sourceMap
  })(require.context('./', true, /^\.\/modules\/\w+\.js$/)),
}

export let mutations = {
  sys: {
    SET_VERSION: '设置版本号',
  },
  ...types.mutations,
}

export let actions = {
  sys: {},
  ...types.actions,
}

export default {
  mutations,
  actions,
}
