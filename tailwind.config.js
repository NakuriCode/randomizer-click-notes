/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ff4-blue': '#000063',
        'earth-shop': '#00ffde',
        'underground-shop': '#ff7e00',
        'moon-shop': '#ba00ff'
      }
    }
  },
  plugins: []
};
