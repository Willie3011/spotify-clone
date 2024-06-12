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
      animation: {
        fade: 'fadeIn 500ms ease-in',
        fadeOut: 'fadeOut 500ms ease-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent'), transform: "translate3d(0, 50%, 0)" },
          '100%': { backgroundColor: theme('colors.spotifyGreen'), transform: "translate3d(0, 0, 0)" },
        },
        fadeOut: {
          '100%': {opacity: 1, transform: "translate3d(0, 50%, 0)"},
          '0%': {opacity: 0, transform: "translate3d(0, 0, 0)"}
        }
      }),
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor: "#898989 #121212"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar" : {
            width: "4px"
          },
          "&::-webkit-scrollbar-track":{
            background: "#121212"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor: "#898989",
            borderRadius: "20px",
            border: "1px solid red"
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

