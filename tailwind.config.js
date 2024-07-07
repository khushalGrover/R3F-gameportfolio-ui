/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
        anton: ['Anton'],
      },
    },
  },
  plugins: [],
}