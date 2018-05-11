/*
 * @Author: Leo - [xuebin.me]
 * @Date: 2018-03-03 16:55:02
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-10 19:12:41
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
   * 获取指定活动的PV
   *
   * @param {any} params
   * {
   *    eventId：活动编号
   *    startTime：查询开始时间（不写默认是 2018-02-06 00:00:00）
   *    endTime：查询结束时间（不写默认是 至今）
   * }
   * @returns
   */
  async getPV(params) {
    if (!params.eventId) throw new Error('缺少查询条件：eventId')
    let { data } = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'moon',
        url: `/platsvrmoon/resume/getPV?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return data
  }
  /**
   * 获取指定活动的UV
   *
   * @param {any} params
   * {
   *    eventId：活动编号
   *    startTime：查询开始时间（不写默认是 2018-02-06 00:00:00）
   *    endTime：查询结束时间（不写默认是 至今）
   * }
   * @returns
   */
  async getUV(params) {
    if (!params.eventId) throw new Error('缺少查询条件：eventId')
    let { data } = await _fetch.get('/c-cp/statistics/get', {
      params: {
        host: 'moon',
        url: `/platsvrmoon/resume/getUV?${qs.stringify({ ...countConfig, ...params })}`,
      },
    })
    return data
  }
}()
