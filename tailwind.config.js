/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
        fontFamily: {
            lato: 'Lato',
            lineaBasic: 'linea-basic-10', 
            varela: 'Varela',
            varelaRound: 'Varela Round',
            roboto: 'Roboto',
            playfair: 'Playfair Display SC',
            openSans: 'Open Sans',
            montserrat: 'Montserrat',
            poppins: 'Poppins',
        }
    },
  },
  plugins: [],
}

