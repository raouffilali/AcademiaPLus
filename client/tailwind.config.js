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
        goldPal: "#FFB54A",
        redPal: "#F6697B",
        lightredPal: "#F5B88F",
        DarkBluePal: "#034B68",
        lightBluePal: "#037498",
        bluePal: "#6DB8D5",
        blueWhitePLusPal: "#D8EBF1",
        darkBluePLusPal: "#062835",
        blueLink:"#037498",
        background:"#F0EBE8",
        greenish:'#DDFED3',
        button:"#e4f9f2",
        pechelight:"#f58156",
        peche:"#F57B4D",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
