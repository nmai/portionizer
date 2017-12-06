'use strict'

let _ = require('underscore')
let util = require('./util')

module.exports.normalizeRatios = (choices, portions) => {
  let keys = Object.keys(choices).map(key => Number(key))
  let ratios = Object.values(choices)
  let addedRatios = util.sumOfArray(ratios)
  let solution = {}

  let adjustedRatios = ratios.map( ratio => {
    return Math.floor(ratio / addedRatios * portions)
  })
  
  let remainder = portions - util.sumOfArray(adjustedRatios)

  if (remainder > 0) {
    let indexOfGreatestRatio = 0
    let indexOfLowestKey = 0

    // This loop searches for the greatest portion ratio value,
    // and lowest numeric key value.
    ratios.map((ratio, index) => {
      if (ratio > ratios[indexOfGreatestRatio])
        indexOfGreatestRatio = index
      if (keys[index] < keys[indexOfLowestKey])
        indexOfLowestKey = index
    })

    // Checking if all ratios are the same.
    // If the array length is 0 or 1, we don't worry about this check.
    // If the index of the greatest ratio is 0 and is equal to the last ratio, then
    // we know there was never a greatest ratio.
    if ( adjustedRatios.length > 0 
      && indexOfGreatestRatio === 0
      && ratios[indexOfGreatestRatio] == ratios[ratios.length - 1]
      ) {
      adjustedRatios[indexOfLowestKey] += remainder
    } else {
      adjustedRatios[indexOfGreatestRatio] += remainder
    }
  }

  // Convert the two arrays into an object
  return _.object(keys, adjustedRatios)
}
