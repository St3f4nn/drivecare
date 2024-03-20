/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        robotocondensed: "'Roboto Condensed', sans-serif",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),

    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "83rem",
        },
      });
    },
  ],
};
