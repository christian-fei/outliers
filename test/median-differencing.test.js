/* globals test */

const assert = require('assert')
const medianDifferencing = require('../median-differencing')
const litecoinJune = require('../samples/litecoin-june.json')

test('medianDifferencing in litecoin june', () => {
  const highs = litecoinJune.sort((a, b) => new Date(a.time) - new Date(b.time)).map(l => +l.high)
  const rreal = medianDifferencing(highs)
  assert.deepEqual(rreal, [ 108.85, 100.95, 86.36 ])
  const rrealIndexes = medianDifferencing(highs, {indexes: true})
  assert.deepEqual(rrealIndexes, [ 10, 12, 22 ])
})
