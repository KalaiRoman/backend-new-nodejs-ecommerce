/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screens: {
    xs: { max: "375px" },
    xs1: { max: "479px" },
    sm: { min: "480px" },
    md: { min: "768px" },
    lg: { min: "976px" },
    xl: { min: "1440px" },
  },
  plugins: [],
}