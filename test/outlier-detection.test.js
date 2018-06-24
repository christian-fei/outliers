/* globals test */

const assert = require('assert')
const outliers = require('..')
const litecoinJune = require('../litecoin-june.json')

test('xxx', () => {
  const data = [12, 14, 51, 12, 10, 9, 16, 1]
  const r = outliers(data)
  console.log('r', r)
  const lows = litecoinJune.map(l => +l.low)
  const rreal = outliers(lows)
  console.log('rreal', rreal)
  // console.log('litecoinJune', litecoinJune)
})
