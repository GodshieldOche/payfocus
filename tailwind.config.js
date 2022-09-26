/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        dark: '#05103A',
        darkOne: '#062156',
        mainBlack: '#848383',
        primaryOne: '#3270FD',
        primaryTwo: '#69D942',
        secondaryOne: '#F5F5F5',
        secondaryTwo: '#D6F7CB',
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
