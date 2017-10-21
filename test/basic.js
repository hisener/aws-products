const test = require('tape')
const awsProducts = require('../')
const awsDetailedProducts = require('../detailed')

test('`aws-products` is an array of product', function (t) {
  t.true(Array.isArray(awsProducts))
  t.true(awsProducts.length > 90 && awsProducts.length < 1000)

  t.end()
})

test('`aws-products/detailed` is an array of detailed product', function (t) {
  t.true(Array.isArray(awsDetailedProducts))
  t.true(awsDetailedProducts.length > 90 && awsDetailedProducts.length < 1000)

  t.true(awsDetailedProducts[0].hasOwnProperty('name'))
  t.true(awsDetailedProducts[0].hasOwnProperty('regions'))
  t.true(Array.isArray(awsDetailedProducts[0].regions))
  t.equal(typeof awsDetailedProducts[0].regions[0], 'object')

  t.equal(typeof awsDetailedProducts[0].regions[0].name, 'string')
  t.true(awsDetailedProducts[0].regions[0].name.length > 1)
  t.equal(typeof awsDetailedProducts[0].regions[0].code, 'string')
  t.true(awsDetailedProducts[0].regions[0].code.length > 1)

  t.end()
})
