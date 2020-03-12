const { merge } = require('lodash')

const options = require('./options/index.js')
const theme = require('./theme/index.js')

const myTailwind = {
  ...options,
  ...theme
}

module.exports = function(config = {}) {
  return merge(myTailwind, config)
}
