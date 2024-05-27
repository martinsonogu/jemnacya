/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#18B8A5",
        primary_color_white: "#fff",
        header_color_black: "#37393F",
        text_color: "#7D7D7D",
        text_color_white: "#FFFFFF",
        link:"#6B77E5"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playFairDisplay: ["Playfair Display", "serif"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bellefair: ["Bellefair", "serif"]
      },
    },
  },
  plugins: [],
}

