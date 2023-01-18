/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // accentColor: "#CB1525",
        accentColor: "#ffb633",
        backgroundColor: "#2c2c2c",
        backgroundColor2: "#313131"
      },
      backgroundImage: {
        'dot-pattern': "url('http://localhost:3000/svg/dot.svg')",
        'polka-dots-pattern': "url('http://localhost:3000/svg/polka-dots.svg')",
      }
    },
  },
  plugins: [],
}