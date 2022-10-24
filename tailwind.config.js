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
          '0%, 100%': { transform: 'scale(100%)' },
          '10%': { transform: 'scale(110%)' },
          '20%': { transform: 'scale(90%)' },
          '30%': { transform: 'scale(100%)' },
          '40%': { transform: 'scale(105%)' },
          '50%': { transform: 'scale(95%)' },
          '60%': { transform: 'scale(100%)' },
          '70%': { transform: 'scale(103%)' },
          '80%': { transform: 'scale(97%)' },
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
