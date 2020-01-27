const assert = require('assert')
const convert = require('../dist/index').default

describe('10kg', function() {
    it('should be equal to ~22lbs', function() {
        assert.equal(Math.floor(convert(10, 'kg').to('lbs')), 22)
    })
})