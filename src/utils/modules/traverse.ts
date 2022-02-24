/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  isArray,
  isEmpty,
  isObject,
  map,
  mapValues,
  omitBy,
  overEvery,
  reject,
} from 'lodash'

export const parse = (data: Record<string, any>): any => {
  const object = JSON.parse(JSON.stringify(data))
  const isEmptyObject = overEvery(isObject, isEmpty)
  const disposeEmptyObject = (data: Record<string, any>): any => {
    return isArray(data)
      ? reject(map(data, disposeEmptyObject), isEmptyObject)
      : isObject(data)
      ? omitBy(mapValues(data, disposeEmptyObject), isEmptyObject)
      : data
  }
  return disposeEmptyObject(object)
}
