/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here
        'primary': '#495E57',
        'secondary': '#F4CE14',
      },
      fontFamily: {
        // Add custom fonts if needed
      },
    },
  },
  plugins: [],
}

