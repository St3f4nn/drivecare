/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        // Gradients

        overlay:
          "linear-gradient(90deg, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.75) 25%, rgba(17, 24, 39, 0.5) 50%, rgba(17, 24, 39, 0.25) 75%, rgba(17, 24,39, 0) 100%)",

        // Images

        carmechanicworking:
          "url('/dist/assets/images/car_mechanic_working.jpg')",
      },
      boxShadow: {
        ctabtn: "inset 0 0 0 0.125rem #f3f4f6",
      },
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
