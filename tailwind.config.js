/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px" },
      },
      fontFamily: {
        "avant-garde-ce": ["Avant-Garde-CE", "sans-serif"],
        "bell-mt": ["Bell-MT", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(41deg, #a21af0 0%, #ff0072 100%)",
      },
    },
  },
  plugins: [],
};
