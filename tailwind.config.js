/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#EBEBEB",
        secondary: "#002E3D",
        tertiary:"#00A7E1"
      },
      fontFamily: {
        poppins : ["Poppins", "serif"]
      },
      boxShadow: {
        left: '5px 0 15px -5px rgba(0, 0, 0, 0.5)', // Customize values as needed
      },
    },

  },
  plugins: [],
}

