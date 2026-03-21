// App.jsx - router principal de la app
// Aquí se conectan TODAS las páginas con sus URLs
// Cada fase irá agregando nuevas rutas aquí

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/context/ThemeContext"
import { AppLayout } from "@/components/layout/AppLayout"
import HomePage from "@/pages/HomePage"
import NotFoundPage from "@/pages/NotFoundPage"

export default function App() {
  return (
    // ThemeProvider → envuelve todo para que cualquier componente
    // pueda usar useTheme() sin importar dónde esté
    <ThemeProvider>

      {/* BrowserRouter → activa el sistema de rutas en la app */}
      <BrowserRouter>
        <Routes>

          {/* Rutas con layout principal (sidebar + contenido) */}
          {/* Todo lo que esté aquí dentro tendrá el AppLayout */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* Fase 2 agrega: /login  /register  /forgot-password */}
            {/* Fase 3 agrega: /perfil  /contactos                 */}
            {/* Fase 4 agrega: /chat/:id                           */}
          </Route>

          {/* Ruta 404 - se activa con cualquier URL que no exista */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}