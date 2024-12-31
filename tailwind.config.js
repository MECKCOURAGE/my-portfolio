/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customGreen: 'hsl(120, 30%, 34%)', 
        green: 'hsl(120, 32%, 28%)',
        gray: 'hsl(84, 12%, 84%)'
      },
      boxShadow: {
        'custom': '0 2px 2px rgba(0, 0, 0, 0)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

