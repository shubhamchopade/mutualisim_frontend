/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#DC944C",

          "secondary": "#263F40",

          "accent": "#11596F",

          "neutral": "#120C12",

          "base-100": "#211720",

          "info": "#8CCAC1",

          "success": "#9CB686",

          "warning": "#FFD261",

          "error": "#FC9783",

          "--range-glucose": "#235789",

          "--range-adenine": "#B88B4A",

          "--range-lysine": "#5A716A"
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
}
