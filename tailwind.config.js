/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14100E",
        inkSoft: "#1D1815",
        wine: "#5C1A2B",
        wineDeep: "#3E0F1D",
        brass: "#C9A24B",
        brassSoft: "#E4C983",
        stone: "#DAD2C3",
        stoneDeep: "#C7BCA6",
        cream: "#F3ECE0",
        sky: "#AFC9CE",
        emberA: "#E8792A",
        emberB: "#C0272B",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
