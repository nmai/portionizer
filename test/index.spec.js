'use strict'

let app = require('../src/index.js')
let should = require('should')

describe('index.js', () => {
  describe('normalizeRatios', () => {
    it('3 ratios with 0 remainder', () => {
      let choices = {
        816: 2,
        518: 28,
        200: 10
      }

      let portions = 40

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        816: 2,
        518: 28,
        200: 10
      })
    })

    it('3 ratios with 1 remainder', () => {
      let choices = {
        23: 2,
        48: 28,
        99: 10
      }

      let portions = 41

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        23: 2,
        48: 29,
        99: 10
      })
    })

    it('1 ratio with 0 remainder', () => {
      let choices = {
        23: 2
      }

      let portions = 2

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        23: 2
      })
    })

    it('1 ratio with 2 remainder', () => {
      let choices = {
        23: 4
      }

      let portions = 6

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        23: 6
      })
    })

    it('3 ratios with 1 remainder, where # of ratios > portions', () => {
      let choices = {
        23: 2,
        48: 28,
        99: 10
      }

      let portions = 21

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        23: 1,
        48: 15,
        99: 5
      })
    })

    it('3 ratios, where portions == 1', () => {
      let choices = {
        23: 2,
        48: 28,
        99: 10
      }

      let portions = 1

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        23: 0,
        48: 1,
        99: 0
      })
    })

    it('3 ratios with 1 remainder, where ratios are all equal', () => {
      let choices = {
        101: 33,
        8: 33,
        99: 33
      }

      let portions = 100

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        101: 33,
        8: 34,
        99: 33
      })
    })

    it('3 ratios with 0 remainder, where ratios are all equal', () => {
      let choices = {
        101: 33,
        8: 33,
        99: 33
      }

      let portions = 99

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {
        101: 33,
        8: 33,
        99: 33
      })
    })

    it('empty choice input', () => {
      let choices = {}

      let portions = 100

      let adjustedRatios = app.normalizeRatios(choices, portions)
      should.deepEqual(adjustedRatios, {})
    })
  })
})
