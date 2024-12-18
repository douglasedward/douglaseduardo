/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gilmer-light": ["Gilmer-Light", "sans-serif"],
        "gilmer-regular": ["Gilmer-Regular", "sans-serif"],
        "gilmer-medium": ["Gilmer-Medium", "sans-serif"],
        "gilmer-bold": ["Gilmer-Bold", "sans-serif"],
        "gilmer-heavy": ["Gilmer-Heavy", "sans-serif"],
        "gilmer-outlined": ["Gilmer-Outline", "sans-serif"],
      },
      screens: {
        vvs: "380px",
      },
    },
  },
  plugins: [],
};
