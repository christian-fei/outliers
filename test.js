var outliers = require('./index.js')
var arr = [12, 14, 51, 12, 10, 9, 16, 1]

var data = [{ n: 12 }, { n: 14 }, { n: 51 }, { n: 12 }, { n: 10 }, { n: 9 }, { n: 16 }, { n: 1 }]

console.log('outliers(arr)', outliers(arr))
console.log('arr.filter(outliers())', arr.filter(outliers()))
console.log(`data.filter(outliers('n'))`, data.filter(outliers('n')))
