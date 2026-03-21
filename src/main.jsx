// main.jsx - punto de entrada de toda la app
// Es el primer archivo que ejecuta el navegador
// Conecta React con el HTML y monta la app en el <div id="root">

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // estilos globales + variables de color
import App from './App.jsx' // componente raíz con todas las rutas

// createRoot → toma el <div id="root"> del index.html
// y monta toda la app React dentro de él
createRoot(document.getElementById('root')).render(
  // StrictMode → modo de desarrollo que detecta problemas
  // no afecta la app en producción, solo muestra advertencias
  <StrictMode>
    <App />
  </StrictMode>,
)