/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cblack: "rgba(23, 23, 27, 1)",
        cgray: "rgba(30, 30, 33, 1)",
        corange: "rgba(243, 111, 69, 1)",
        cpurple: "rgba(135, 105, 255, 1)",
        cwhite: "rgba(255, 255, 255, 1)",
        ccyan: "rgba(97, 209, 234, 1)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
