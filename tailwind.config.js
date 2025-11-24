/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Royal Blue
        secondary: '#f59e0b', // Amber/Gold
        accent: '#3b82f6',    // Lighter Blue
        light: '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you import a font if you wish
      }
    },
  },
  plugins: [],
}