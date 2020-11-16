const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const aspectRatio = require('tailwindcss-aspect-ratio');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '4/3': [4, 3],
      '16/9': [16, 9],
      '21/9': [21, 9],
    },
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.gold'),
          },
          'ol > li:before': {
            color: theme('colors.gold'),
          },
          'ul > li:before': {
            backgroundColor: theme('colors.gold'),
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        display: ['Aviano Royale', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: '#000f17',
        gold: '#d69935',
        cream: '#f3f1f2',
      },
    },
  },
  // Default values here: https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    // See https://tailwindui.com/documentation for details
    tailwindUI,
    // See https://github.com/webdna/tailwindcss-aspect-ratio for details
    aspectRatio,
  ],
};
