/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "6px",
      },
      screens: {
        md: "768px",
        lg: "1024px",
      },
      colors: {
        red: {
          DEFAULT: "#EB7106",
          dark: "#EB7106",
        },
        "body-title": {
          DEFAULT: "#595959",
          dark: "#595959",
        },
        "body-bg": {
          DEFAULT: "#f3f4f6",
          dark: "#f3f4f6",
        },
        heading: {
          DEFAULT: "#333333",
          dark: "#333333",
        },
        placeholder: {
          DEFAULT: "#333333 50%",
          dark: "#333333 50%",
        },
        outline: {
          DEFAULT: "#C9CBCE",
          dark: "#C9CBCE",
        },
        "outline-selected": {
          DEFAULT: "#00A6F2",
          dark: "#00A6F2",
        },
        "table-header": {
          DEFAULT: "#C9CBCE 20%",
          dark: "#C9CBCE 20%",
        },
        caution: {
          DEFAULT: "#C14800",
          dark: "#C14800",
        },
        "caution-bg": {
          DEFAULT: "#FFF8CB",
          dark: "#FFF8CB",
        },
        error: {
          DEFAULT: "#FF4F64",
          dark: "#DC3347",
        },
        "error-bg": {
          DEFAULT: "#FFD7E2",
          dark: "#FFD7E2",
        },
      },
    },
    fontFamily: {
      sans: ['"SF UI Text"', ...defaultTheme.fontFamily.sans],
      display: ['"Pulp Display"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ["12px", "18px"],
      md: ["14px", "22px"],
      base: ["16px", "26px"],
      "base-middle": ["16px", "16px"],
      lg: ["20px", "30px"],
      xl: ["34px", "45px"],
    },
  },
  plugins: [],
};
