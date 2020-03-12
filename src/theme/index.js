const colors = require('./color.js')
const sizing = require('./sizing.js')

module.exports = {
  theme: {
    extend: {
      ...colors,
      ...sizing
    }
  }
}
