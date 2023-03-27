/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Arimo", "sans-serif"],
      display: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
