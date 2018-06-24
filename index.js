var isArray = Array.isArray
const log = require('debug')('outliers')

module.exports = outliers

function outliers (arr, key) {
  // log('.outliers', arr)
  if (isArray(arr)) return calc(arr, key)

  var o = null
  var k = typeof arr === 'string' && arr

  return function (v, i, a) {
    if (!o) o = calc(a, k)
    v = k ? v[k] : v
    return !~o.indexOf(v)
  }
}

function calc (arr, key) {
  arr = arr.slice(0)

  if (key) arr = arr.map(function (v) { return v[key] })

  arr = arr.sort(function (a, b) {
    return a - b
  })

  var len = arr.length
  var middle = median(arr)
  log('middle', middle)
  var range = iqr(arr) / 1.75
  log('range', range)
  var outliers = []

  for (var i = 0; i < len; i++) {
    log('-- for: process', i, arr[i])
    if (Math.abs(arr[i] - middle) > range) {
      log('-- for: pushing outlier', arr[i])
      outliers.push(arr[i])
    } else {
      log('-- for: skipping outlier', arr[i])
    }
  }

  log('-- outliers', outliers)

  return outliers
}

function median (arr) {
  // log('.median', arr)
  var len = arr.length
  var half = ~~(len / 2)

  return len % 2
    ? arr[half]
    : (arr[half - 1] + arr[half]) / 2
}

function iqr (arr) {
  // log('.iqr', arr)
  var len = arr.length
  var q1 = median(arr.slice(0, ~~(len / 2)))
  var q3 = median(arr.slice(Math.ceil(len / 2)))
  var g = 1.5

  return (q3 - q1) * g
}
