/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#9769d1",
        secondaryColor: "#c2a6e3",
        yellowColor: "#FEB60D",
        accentColor: "#5ac8fa",
        greenColor: "#A0D468",
        headingColor: "#181A1E",
        textColor: "#333333",
        whiteColor: "#FAFAFA",
        borderColor: "#d1d1d1",
      },

      boxShadow: {
        panelShadow: "#d1d1d1 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
