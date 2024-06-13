/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/index.css"

  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFF4E4',      // Custom primary color
        secondary: '#9333EA',    // Custom secondary color
        accent: '#F59E0B',       // Custom accent color
        primarybg: '#090A15', 
        background: '#F3F4F6',   // Custom background color
        text: '#374151',         // Custom text color
      },
      fontFamily:{
        sans: ['Quicksand','sans-serif'],
        serif: ['Merriweather', 'serif'],
        georgia: ['Georgia', 'serif'],
        times: ['Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}

