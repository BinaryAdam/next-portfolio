module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#FFF4F3",
          DEFAULT: "#F9DEDB",
          dark: "#B57C76"
        }, 
        blue: {
          light: "#6B6B90",
          DEFAULT: "#323254",
          dark: "#21214A"
        }
      }
    },
    fontFamily: {
      sans: ['"Josefin Sans"', 'sans-serif']
    },
    gridTemplateColumns: {
      'main-wide': '1fr 50% 1fr'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
