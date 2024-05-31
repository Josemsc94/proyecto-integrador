/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "hardText": "#f97316",
        "primaryText": "#fb923c",
        "secundaryText": "#fdba74",
        "smoothText": "##fed7aa",
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
