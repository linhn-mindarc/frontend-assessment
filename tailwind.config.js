/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f8f8ff',
          100: '#e1e1e1ff',
          200: '#c1c1c2ff',
          300: '#8f8f8fff',
          400: '#565656ff',
          500: '#393939ff',
          600: '#353535ff',
          700: '#282828ff',
          800: '#0b0b0bff',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
