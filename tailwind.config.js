/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        4: "repeat(4, minmax(0, 15rem))",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        sliderShadow:
          "0 .125rem .25rem 0 rgba(0,0,0,.13),0 0 .0625rem 0 rgba(0,0,0,.11)",
      },
      colors: {
        nav: "#e6e6e6",
      },
      screens: {
        laptop2: "1125px",
      },
    },
  },
  plugins: [],
};
