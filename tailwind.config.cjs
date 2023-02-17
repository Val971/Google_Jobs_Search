/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": "#334680",
      "light-blue": "#1E86FF",
      "light-gray": "#B9BDCF",
      white: "#FFFFFF",
      gray: "#B9BDCF",
    },
    extend: {
      backgroundImage: {
        "search-bg": "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
