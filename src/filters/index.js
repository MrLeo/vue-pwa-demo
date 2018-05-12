/*
 * @Author: Leo - www.xuebin.me 
 * @Date: 2018-05-12 11:56:40 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-05-12 11:57:20
 */

/**
 * 单位
 * @param {*} value
 * @param {*} unit
 */
export function unit(value, unit) {
  if (!value && value !== 0) return ''
  if (value === '暂无') return value
  return value + unit
}
