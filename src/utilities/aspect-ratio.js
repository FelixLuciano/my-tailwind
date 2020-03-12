const _ = require('lodash')

const defaultTheme = {
  square: 1 / 1,
  wide: 16 / 9
}

const defaultVariants = ['responsive']

const components = {
  '.aspect-ratio': {
    position: 'relative',

    '&:after': {
      content: "''",
      width: '100%',
      paddingBottom: 'calc(var(--aspect-ratio, 1) * 100%)',
      display: 'block'
    },

    '&.reverse-ratio:after': {
      paddingBottom: 'calc(1 / var(--aspect-ratio, 1) * 100%)'
    },

    '& > .aspect-ratio-content': {
      width: '100%',
      height: '100%',
      position: 'absolute'
    }
  }
}

module.exports = function(options = {}) {
  return function({ theme, variants, e, addComponents, addUtilities }) {
    const utilitiTheme = theme('aspectRatio', defaultTheme)
    const utilitiVariants = variants('aspectRatio', defaultVariants)

    const utilities = _.fromPairs(
      _.map(utilitiTheme, (value, modifier) => {
        const aspectRatio = _.isArray(value) ? value[0] / value[1] : value

        return [
          `.${e(`ratio-${modifier}`)}`,
          {
            '--aspect-ratio': `1 / ${aspectRatio}`
          }
        ]
      })
    )

    addComponents(components)
    addUtilities(utilities, utilitiVariants)
  }
}
