/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      offWhite: '#ECF2F8',
      darkBlue: '#48556A',
      medBlue: '#6E8098',
      lightBlue: '#9DAEC2'
    }
  },
  plugins: [],
}