/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
        fontFamily: {
            lato: 'Lato, sans-serif',
            lineaBasic: 'linea-basic-10', 
            varela: 'Varela, sans-serif',
            varelaRound: 'Varela Round, sans-serif',
            roboto: 'Roboto, sans-serif',
            playfair: 'Playfair Display SC, sans-serif',
            openSans: 'Open Sans, sans-serif',
            montserrat: 'Montserrat, sans-serif',
            poppins: 'Poppins, sans-serif',
        },
    },
  },
  plugins: [],
}

