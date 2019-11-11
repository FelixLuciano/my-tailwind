const colors = require('./color.js')
const fontSize = require('./fontSize.js')
const screens = require('./screens.js')
const sizing = require('./sizing.js')

module.exports = {
  theme: {
    ...colors,
    ...fontSize,
    ...screens,
    ...sizing
  }
}
