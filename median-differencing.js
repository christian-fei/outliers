// Median Differencing
// Use this if the order of your data matters.
// This looks at the difference between adjacent points best for time series data.
// Based on https://github.com/alyssaq/stats-analysis

'use strict'

module.exports = function (array, opts, callback) {
  let threshold = (opts && opts.threshold) || 3

  let arr = array.map((e, i) => Math.round(Math.abs(e - (array[i > 0 && ((i - 1) || 0)]))) + 1)
  let median = calcMedian(arr)

  let check = (e) => e / median > threshold

  let res = (opts && !!opts.indexes)
    ? arr.map((e, i) => check(e) && i).filter((e) => e !== false)
    : array.filter((e, i) => check(arr[i]))

  return (callback) ? callback(null, res) : res
}

function calcMedian (values) {
  if (values.length === 0) { return NaN }

  let arr = values.slice(0).sort((a, b) => a - b)
  let half = ~~(arr.length / 2)

  return (arr.length % 2) ? arr[half] : (arr[half - 1] + arr[half]) / 2.0
}
