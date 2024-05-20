/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangey: "#f05511",
        greyy: "#dadbe0",
        greyText: "#848484",
        darkGrey: "#333333",
      },
    },
    screens: {
      xxl: "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "540px",
      xs: "340px",
    },
  },
  variants: {
    extend: {
      translate: ["hover", "focus", "group-hover"],
      tranform: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
