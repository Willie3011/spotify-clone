/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotifyGreen: '#1DB954',
        spotifyBlack: '#000000',
        spotifyDarkGray: '#121212',
        spotifyLightGray: '#B3B3B3',
      },
    },
  },
  plugins: [],
}

