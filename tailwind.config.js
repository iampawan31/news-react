module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5374FE',
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
