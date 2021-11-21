module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1180px',

      '2xl': '1280',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
