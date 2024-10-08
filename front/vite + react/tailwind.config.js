/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "550px": "550px",
      },
      height: {
        "600px": "600px",
      },
      colors: {
        pinky: "#ED6A5A",
        greeny: "#548C2F",
        lightGreeny: "#a9fa73",
        active: "#86ba90",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        title: ["Cinzel Decorative", "serif"],
      },
    },
  },
  plugins: [],
};
