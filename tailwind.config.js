/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      cursor: {
        'auto': 'url(../public/auto-cursor.cur), auto'
      },
      height: {
        'hero-banner': 'calc(100vh - 10.5rem)',
      }
    },
    colors: {
      ...colors,
      red: '#cc3542'
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}
