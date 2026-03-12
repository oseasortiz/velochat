import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/context/ThemeContext"
import { AppLayout } from "@/components/layout/AppLayout"
import HomePage from "@/pages/HomePage"
import NotFoundPage from "@/pages/NotFoundPage"

export default function App() {
  return (
    // ThemeProvider da acceso al tema a TODA la app
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas con el layout principal */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          {/* Ruta 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}