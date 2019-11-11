const utilities = require('../utilities/index.js')

module.exports = {
  plugins: [
    require('tailwindcss-children')(),
    require('tailwindcss-transitions')(),
    ...utilities
  ]
}
