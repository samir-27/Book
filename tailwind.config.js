/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
        '10vh': '10vh',
        '108': '30rem'
      }
    },
  },
  plugins: [],
}