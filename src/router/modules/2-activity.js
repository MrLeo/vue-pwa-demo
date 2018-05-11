/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2017-12-29 14:00:30
 * @Last Modified by: Leo
 * @Last Modified time: 2018-03-03 18:50:15
 */
export default [
  {
    path: 'activity',
    name: 'activity',
    title: '活动',
    component: resolve => require(['../../views/RouterView'], resolve),
    meta: {
      icon: 'wineglass'
    },
    redirect: 'activity/index',
    children: [
      {
        path: 'index',
        name: 'activity_index',
        title: '汇总',
        component: resolve => require(['../../views/activity/Index'], resolve)
      }
    ]
  }
]
