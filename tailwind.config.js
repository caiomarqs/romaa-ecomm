/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

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
      }
    },
    colors: {
      ...colors,
      red: '#cc3542'
    }
  },
  plugins: [],
}
