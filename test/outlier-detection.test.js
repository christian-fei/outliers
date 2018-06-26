/* globals test */

const assert = require('assert')
const outliers = require('..')
const litecoinJune = require('../samples/litecoin-june.json')

test('outliers in litecoin june', () => {
  const lows = litecoinJune.map(l => +l.low)
  const rreal = outliers(lows)

  assert.deepEqual(rreal, [ 74.29,
    117.12,
    117.74,
    118.56,
    118.7,
    118.73,
    118.95,
    119.62,
    122.37 ])
})
test('outliers in litecoin june with custom divider', () => {
  const divider = 2
  const lows = litecoinJune.map(l => +l.low)
  const rreal = outliers(lows, divider)

  assert.deepEqual(rreal, [ 74.29,
    79.02,
    116.44,
    117.12,
    117.74,
    118.56,
    118.7,
    118.73,
    118.95,
    119.62,
    122.37 ])
})
