/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
    },
    extend: {
      colors: {
        mainRed: "#F24748",
        yellowBg: "#FFEECE",
      },
    },
  },
  plugins: [],
};
