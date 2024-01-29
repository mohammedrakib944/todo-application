/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6841da",
        secondary: "#e64980",
        success: "#05d505",
        "black-100": "#353a40",
        "black-200": "#2c3137",
      },
    },
  },
  plugins: [],
};
