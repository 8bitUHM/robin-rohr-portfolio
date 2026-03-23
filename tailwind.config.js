/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        ivory: "#FFFDF7",
        gold: {
          DEFAULT: "#C8A84E",
          light: "#E8D48A",
          dark: "#A08530",
        },
      },
    },
  },
  plugins: [],
};
