/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1390px', // Adding the custom breakpoint
        'xs': '413px',
        'xss': '400px',
      },
    },
  },
  plugins: [],
}