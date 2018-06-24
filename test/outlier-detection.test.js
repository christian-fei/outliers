/* globals test */

const assert = require('assert')
const outliers = require('..')
const litecoinJune = require('../litecoin-june.json')

test('outliers in litecoin june', () => {
  const lows = litecoinJune.map(l => +l.low)
  const rreal = outliers(lows)
  assert.deepEqual(rreal, [118.95, 119.62, 122.37])
})
test('outliers in litecoin june with custom divider', () => {
  const divider = 2
  const lows = litecoinJune.map(l => +l.low)
  const rreal = outliers(lows, divider)
  assert.deepEqual(rreal, [118.56, 118.7, 118.73, 118.95, 119.62, 122.37])
})
