/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "4e": "repeat(4, minmax(0, 15rem))",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        sliderShadow:
          "0 .125rem .25rem 0 rgba(0,0,0,.13),0 0 .0625rem 0 rgba(0,0,0,.11)",
        allOverShadow:
          "0 0.1875rem 0.4375rem 0 rgba(0,0,0,.13), 0 0.0625rem 0.125rem 0 rgba(0,0,0,.11)",
      },
      colors: {
        nav: "#e6e6e6",
        xbox: "#edeef0",
      },
      screens: {
        laptop2: "1125px",
        lgextend: "1084px",
      },
    },
  },
  plugins: [],
};
