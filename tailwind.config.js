module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#FFF4F3",
          DEFAULT: "#F9DEDB",
          dark: "#B57C76",
        },
        blue: {
          light: "#6B6B90",
          DEFAULT: "#323254",
          dark: "#21214A",
        },
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10'
      },
      gridColumn: {
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10'
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        'end': '-1'
       }
    },
    fontFamily: {
      sans: ['"Josefin Sans"', "sans-serif"],
    },
    gridTemplateColumns: {
      "main-wide": "1fr 60% 1fr"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
