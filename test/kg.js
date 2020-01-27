const assert = require('assert')
const convert = require('../dist/index').default

describe('10kg', function() {
    it('should throw an Error when converted to an unknown unit', function() {
        assert.throws(() => convert(10, 'kg').to('coal'))
    })
    it('should recognize plural units (e.g. lbs => lb)', function() {
        assert.equal(Math.floor(convert(10, 'kgs').to('lbs')), 22)
    })
    it('should equal 10000 grams', function() {
        assert.equal(convert(10, 'kg').to('g'), 10000)
    })
    it('should equal 10000000 milligrams', function() {
        assert.equal(convert(10, 'kg').to('mg'), 10000000)
    })
    it('should be roughly 22 pounds', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('lb')), 22)
    })
    it('should be roughly 154323 grains', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('gr')), 154323)
    })
    it('should be roughly 352 ounces', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('oz')), 352)
    })
    it('should be roughly 1 stone', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('st')), 1)
    })
    it('should be roughly 0 quarters', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('qr')), 0)
    })
    it('should be roughly 0 hundredweights', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('cwt')), 0)
    })
})

describe('32oz', function() {
    it('should be roughly 2 pounds', function() {
        assert.equal(Math.floor(convert(32, 'oz').to('lb')), 2)
    })
})