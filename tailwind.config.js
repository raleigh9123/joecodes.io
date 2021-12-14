// tailwind.config.js

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        mono: ["SilkaMono"],
      },
      colors: {
        gray: colors.neutral,
        black: "rgb(23,23,23)",
      },
      flex: {
        half: "1 0 50%",
        2: "2 1 0%",
        full: "1 1 100%",
      },
      gridTemplateRows: {
        doubleAuto: "auto 1fr",
      },
      letterSpacing: {
        tightest: "-.075em",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, addVariant }) {
      const background = {
        ".bg-theme-dark": {
          background: `linear-gradient(
            135deg,
            rgba(23, 23, 23, 1) 65%,
            rgba(128, 255, 219, 0.8) 70%,
            rgba(114, 239, 221, 1) 73%,
            rgba(100, 223, 223, 1) 76%,
            rgba(86, 207, 225, 1) 79%,
            rgba(72, 191, 227, 1) 82%,
            rgba(78, 168, 222, 1) 85%,
            rgba(83, 144, 217, 1) 88%,
            rgba(94, 96, 206, 1) 91%,
            rgba(105, 48, 195, 1) 94%,
            rgba(116, 0, 184, 1) 97%
          )`,
        },
      };

      addUtilities(background)
    })
  ],
};
