/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        hero: "#D8DBDB",
        secondHero: "#fff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        cinzel:  ["Cinzel Decorative", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
      }
    },
    screens: {
      'gg': {'max': '1100px'},
      'gm': {'max': '1000px'},
      'mdd': {'max': '970px'},
      'md': {'max': '960px'},
      'sm': {'max': '800px'},
      'ss': {'max': '610px'},
    },
  },
  plugins: [],
};