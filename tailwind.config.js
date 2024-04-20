/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        600: "600px",
      },
      boxShadow: {
        custom: "0 0 22px rgba(242, 153, 175, 0.4)",
      },
      textShadow: {
        custom: "0 0 18px #F299AF",
      },
      colors: {
        paragraph: "#9F9FA2",
      },
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
      fontFamily: {
        vanguard: ["Vanguard"],
        monument: ["Monument"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to right, #ade3fd, #c199ff, #e698c3, #ff9a9a)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".stroke": {
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "#FFFFFF33",
        },
        ".ml_custom": {
          "margin-left": "calc(4vw + 1rem)",
        },
        ".mx_custom": {
          "margin-left": "calc(4vw + 1rem)",
          "margin-right": "calc(4vw + 1rem)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
