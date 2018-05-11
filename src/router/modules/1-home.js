/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 14:00:30
 * @Last Modified by: Leo
 * @Last Modified time: 2018-03-03 10:57:43
 */
export default [
  {
    path: 'home',
    name: 'home',
    title: '首页',
    component: resolve => require(['../../views/RouterView'], resolve),
    meta: {
      icon: 'pie-graph'
    },
    redirect: 'home/index',
    children: [
      {
        path: 'index',
        name: 'home_index',
        title: '汇总',
        component: resolve => require(['../../views/home/Index'], resolve)
      },
      {
        path: 'score',
        name: 'home_score',
        title: '分数',
        component: resolve => require(['../../views/home/Score'], resolve)
      },
      {
        path: 'tags',
        name: 'home_tags',
        title: '标签',
        component: resolve => require(['../../views/home/Tags'], resolve)
      }
    ]
  }
]
