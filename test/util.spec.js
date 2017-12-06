'use strict'

let util = require('../src/util.js')
let should = require('should')

describe('util.js', () => {
  describe('sumOfArray', () => {
    it('summing 4 positive integers', () => {
      let values = [
        1,
        10,
        100,
        1000
      ]

      should.equal(1111, util.sumOfArray(values))
    })

    it('summing 4 mixed sign integers', () => {
      let values = [
        1,
        -10,
        100,
        -1000
      ]

      should.equal(-909, util.sumOfArray(values))
    })

    it('summing 1 integer', () => {
      let values = [
        2
      ]

      should.equal(2, util.sumOfArray(values))
    })

    it('summing empty array', () => {
      let values = []

      should.equal(0, util.sumOfArray(values))
    })
  })
})