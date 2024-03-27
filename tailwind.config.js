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

        "car-mechanic-working":
          "url('../assets/images/car_mechanic_working.jpg')",
        "car-engine": "url('../assets/images/car_engine.jpg')",
        "car-in-garage": "url('../assets/images/car_in_garage.jpg')",
        "placing-a-felugue": "url('../assets/images/placing_a_felugue.jpg')",
        "car-mechanic-working-2":
          "url('../assets/images/car_mechanic_working_2.jpg')",
        "disassembled-audi": "url('../assets/images/disassembled_audi.jpg')",
        "car-mechanic-working-3":
          "url('../assets/images/car_mechanic_working_3.jpg')",
        "mechanic-fills-the-oil":
          "url('../assets/images/mechanic_fills_the_oil.jpg')",
      },
      boxShadow: {
        "cta-btn": "inset 0 0 0 0.125rem #f3f4f6",
      },
      fontFamily: {
        "roboto-condensed": "'Roboto Condensed', sans-serif",
      },
      scale: {
        115: "1.15",
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
