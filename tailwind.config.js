/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkOrange: "#ff8c00",
        paleOrange: "#ffd8a8",
        veryLightOrange: "#ffca7a",
        lightOrange: "#ffad42",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
