/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#F9F7F7',
          surface: '#DBE2EF',
          primary: '#3F72AF',
          dark: '#112D4E',
        },
      },
    },
  },
  plugins: [],
};