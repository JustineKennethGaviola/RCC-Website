/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'accentgreen': '#126f43',
        'accent': '#0a2472',
      },
      fontSize: {
        'md': '16px',
      },
    },
  },
  plugins: [],
}

