/* globals test */

const assert = require('assert')
const medianDifferencing = require('../median-differencing')
const litecoinJune = require('../litecoin-june.json')

test('medianDifferencing in litecoin june', () => {
  const lows = litecoinJune.map(l => +l.low).sort((a, b) => new Date(a.time) - new Date(b.time))
  const rreal = medianDifferencing(lows)
  assert.deepEqual(rreal, [ 117.12, 96.36, 81.4, 104.12, 117.74, 99.37 ])
})
