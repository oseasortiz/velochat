// Configuración de Tailwind CSS
// content → le dice a Tailwind en qué archivos buscar clases
// darkMode → "class" significa que el modo oscuro se activa
//            cuando <html> tiene class="dark"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // activa modo oscuro con clase CSS
  content: [
    "./index.html",         // busca clases en el HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // busca en todos los archivos de src/
  ],
  theme: {
    extend: {
      // aquí Dany agregará colores y fuentes personalizadas en Fase 3
    },
  },
  plugins: [],
}