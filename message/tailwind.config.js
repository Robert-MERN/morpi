/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-2': "url('/images/shape2.png')",
        'wave-3': "url('/images/shape3.png')",
        'wave-4': "url('/images/shape4.png')",
      },
      boxShadow: {
        "default": "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        "popper": "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }
    },
  },
  plugins: [],
}
