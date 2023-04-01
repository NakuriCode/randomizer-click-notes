/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ff4-blue': '#000063',
        'ff4-blue-light': '#0000db',
        'earth-shop': '#00ffde',
        'underground-shop': '#ff7e00',
        'moon-shop': '#ba00ff',
        'gradient-gray-dark': '#090909',
        'gradient-gray-light': '#0c1226'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: false })]
};
