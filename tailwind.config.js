/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#1f2937',  // Color oscuro para la barra de navegación
        'nav-text': '#ffffff', // Color de texto blanco
        'nav-hover': '#FFD700', // Color dorado para el hover
      },
      fontFamily: {
        'nav': ['Roboto', 'sans-serif'], // Fuente para la barra de navegación
      },
    },
  },
  plugins: [],
}
