/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2018-03-03 16:55:02
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-10 19:12:34
 */

/**
 * 职场竞争力接口
 */

import _fetch from '../utils/fetch'
import qs from 'qs'
import moment from 'moment'

let countConfig = {
  startTime: moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD HH:mm:ss'),
  endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
}

_fetch.defaults.baseURL = process.env.VUE_APP_FE_API || ''

export default new class standout {
  /**
   * 用户数统计
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    startTime: '2018-03-01 10:07:59',
   *    endTime: '2018-03-01 10:08:11',
   *    taskId: ''
   *  }
   * @returns
   */
  async getUserCount(params) {
    if (!params.taskId) throw new Error('缺少查询条件:taskId')
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getUserCount?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 颜值标签统计
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    startTime: '2018-03-01 10:07:59',
   *    endTime: '2018-03-01 10:08:11',
   *    tagName: '高颜值'
   *  }
   * @returns
   */
  async getFaceScoreUserCountByTagName(params) {
    if (!params.tagName) throw new Error('缺少查询条件:tagName')
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getFaceScoreUserCountByTagName?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 人脉评价-成功点评总数
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    startTime: '2018-03-01 10:07:59',
   *    endTime: '2018-03-01 10:08:11'
   *  }
   * @returns
   */
  async getEvaluationCount(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getEvaluationCount?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 人脉评价-人均被点评数
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    startTime: '2018-03-01 10:07:59',
   *    endTime: '2018-03-01 10:08:11'
   *  }
   * @returns
   */
  async getEvaluationCountPerUser(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getEvaluationCountPerUser?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 完成女性领导力论坛任务用户数
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    startTime: '2018-03-01 10:07:59',
   *    endTime: '2018-03-01 10:08:11'
   *  }
   * @returns
   */
  async getFemaleLeadershipUserCount(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getFemaleLeadershipUserCount?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 人脉评价任务：每个标签被点评（向HR展示）的次数
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    sort:'DESC'
   *  }
   * @returns
   */
  async getEvaluationTagTimes(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getEvaluationTagTimes?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 人脉评价任务：每个标签被隐藏（不向HR展示）的次数
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    sort:'DESC'
   *  }
   * @returns
   */
  async getEvaluationTagNotShowTimes(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getEvaluationTagNotShowTimes?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 亮点标签：根据简历打出的所有亮点标签每个标签生成的次数
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    sort:'DESC'
   *  }
   * @returns
   */
  async getResumeTagTimes(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getResumeTagTimes?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 亮点标签：根据简历打出的所有亮点标签每个标签不向hr展示的次数【预上线和线上不要调此接口，数据量太大sql执行不了】
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    sort:'DESC'
   *  }
   * @returns
   */
  async getResumeTagNotShowTimes(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getResumeTagNotShowTimes?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }

  /**
   * 职场竞争力分数分布
   *
   * @param {any} { state, dispatch, commit, rootState }
   * @param {any} params
   *  {
   *    sort:'DESC'
   *  }
   * @returns
   */
  async getCompetitiveScoreDistribution(params) {
    let res = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'userCompetitiveScore',
        url: `/user/competitive/getCompetitiveScoreDistribution?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return res.data
  }
}()
