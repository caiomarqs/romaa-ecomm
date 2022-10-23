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
        'section-full-screen': 'calc(100vh - 8.5rem)',
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-5deg)' },
          '20%': { transform: 'rotate(5deg)' },
          '30%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '70%': { transform: 'rotate(-1deg)' },
          '80%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        vibrate: 'vibrate .3s infinite',
      }
    },
    colors: {
      ...colors,
      main: '#cc3542'
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}
