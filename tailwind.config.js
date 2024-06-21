/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "575px" },
      sm: { max: "767px" },
      md: { min: "768px", max: "991px" },
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    spacing: {
      1: "0.5rem",
      2: "0.75rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "3rem",
    },
    fontSize: {
      xxs: "0.7rem",
      xs: "0.8rem",
      sm: "0.9rem",
      base: "1rem",
      md: "1.2rem",
      lg: "1.4rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.5rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      gradient: "linear-gradient(90deg, #b224ef 0%, #7579ff 100%)",
    },
    extend: {
      colors: {
        negrolineal: "#1b1c37",
        lightblue: "#7579FF",
        purple: "#b224ef",
      },
    },
  },
  plugins: [],
};
