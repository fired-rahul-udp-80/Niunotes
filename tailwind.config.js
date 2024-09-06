/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        titleFont : ["Ubuntu", "sans-serif" ],
        bodyFont : [  "Poppins", "sans-serif"],
      },
      colors : {
        boxColor: "#E6F2F4",
        bgColor:"#58111A",
        secondaryColor:"#E5E4E2",
        primaryColor:"#343434",
        boxBg : "linear-gradient(145deg, #le2024, #23272b)",
      },
      boxshadow : {
        shadowOne : "10px 10px 19px #E6F2F4, 10px 10px 19px #E6F2F4"
      },
    },
  },
  plugins: [],
}

