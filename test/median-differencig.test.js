/* globals test */

const assert = require('assert')
const medianDifferencing = require('../median-differencing')
const litecoinJune = require('../litecoin-june.json')

test('medianDifferencing in litecoin june', () => {
  const lows = litecoinJune.map(l => +l.low)
  const rreal = medianDifferencing(lows)
  assert.deepEqual(rreal, [96.36, 117.74])
})
