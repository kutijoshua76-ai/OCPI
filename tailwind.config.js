/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocpi-blue': '#1B96D8',
        'ocpi-blue-dark': '#147cb5',
        'ocpi-blue-light': '#48b0e8',
        'ocpi-green': '#8FC02A',
        'ocpi-green-dark': '#77a321',
        'ocpi-green-light': '#a5d642',
        brand: {
          dark: '#0b1120',
          surface: '#111827',
          elevated: '#1e293b',
          border: '#334155',
          primary: '#1B96D8',
          'primary-dark': '#147cb5',
          'primary-light': '#48b0e8',
          accent: '#8FC02A',
          'accent-dark': '#77a321',
          'accent-light': '#a5d642',
          blue: '#1B96D8',
          green: '#8FC02A',
        }
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
