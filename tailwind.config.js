/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        mainBlack: '#848383',
        primaryOne: '#3270FD',
        secondaryOne: '#F5F5F5'
      }
    },
  },
  plugins: [],
}
