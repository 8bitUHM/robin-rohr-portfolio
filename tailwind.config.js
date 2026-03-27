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
        navy: {
          50: "#eef3fb",
          100: "#dce6f5",
          200: "#adc5e8",
          400: "#5b8dc9",
          600: "#2c5ea0",
          700: "#234c85",
          800: "#1c3d6e",
          900: "#142d52",
        },
      },
    },
  },
  plugins: [],
};
