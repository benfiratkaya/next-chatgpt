/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accents: {
          0: '#000',
          1: '#16181c',
          2: '#2f3336',
          3: '#444',
        }
      }
    },
  },
  plugins: [],
}

