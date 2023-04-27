const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        goldPal: "#FB7200",
        yelloPal: "#F58D01",
        lightYelloPal: "#F7A015",
        DarkBluePal: "#034B68",
        lightBluePal: "#037498",
        bluePal: "#6DB8D5",
        blueWhitePLusPal: "#D8EBF1",
        darkBluePLusPal: "#062835",
        blueLink:"#037498",
        background:"#F0EBE8",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
