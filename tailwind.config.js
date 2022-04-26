module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'primary': {
        'light': '#C799DD', 
        'DEFAULT': '#BB81D6',
        'dark': '#A136D3', 
      },
      'secundary': {
        'light': '#FDFFA1', 
        'DEFAULT': '#FCFF80',
        'dark': '#FCFF5C', 
      },
      'black': {
        'light': '#545454', 
        'DEFAULT': '#373737',
        'dark': '#000000', 
      },
      'white': {
        'light': '#FDFCFC', 
        'DEFAULT': '#F9F9F9',
        'dark': '#FFFFFF', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}