/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MyFont: "Source Sans Pro",
      },
      colors: {
        grayText: "#8E8E93",
        blue: " #0000FF",
        green: "#32CD32",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
