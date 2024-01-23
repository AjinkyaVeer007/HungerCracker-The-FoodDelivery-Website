/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0d0c22",
      secondary: "#6e6d7a",
      white: "#fff",
      dark: "#000",
      red: "#f43f5e",
      green: "#44ce42",
      border: "#dee2e6",
      tomato: "#ff6347",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        logo: ["Pacifico", "sans-serif"],
      },
    },
  },
  plugins: [],
};
