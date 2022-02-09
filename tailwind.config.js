module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1b74e4',
        secondary: '#333333',
        alternate: '#E7EAEE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
