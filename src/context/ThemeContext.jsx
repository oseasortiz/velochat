// ThemeContext - maneja el tema oscuro/claro de toda la app
// Cualquier componente puede leer y cambiar el tema desde aquí
// sin importar dónde esté en el árbol de componentes

import { createContext, useContext, useEffect, useState } from "react"

// 1️⃣ Canal global - conecta todos los componentes con el tema
const ThemeContext = createContext(null)

// 2️⃣ ThemeProvider - debe envolver toda la app en App.jsx
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {
    // Primero revisa si el usuario ya eligió un tema antes
    const saved = localStorage.getItem("velochat-theme")
    if (saved) return saved
    // Si no hay preferencia guardada → detecta la del sistema
    // window.matchMedia detecta si el SO está en modo oscuro
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  useEffect(() => {
    // Se ejecuta cada vez que theme cambia
    // Actualiza la clase del <html> para activar estilos de index.css
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    // Guarda la preferencia para que se recuerde al recargar la página
    localStorage.setItem("velochat-theme", theme)
  }, [theme]) // [theme] → solo corre cuando theme cambia

  // Alterna entre "dark" y "light" cada vez que se llama
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    // Comparte theme y toggleTheme con todos los componentes hijos
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3️⃣ Hook para usar el tema en cualquier componente
// Uso: const { theme, toggleTheme } = useTheme()
export function useTheme() {
  const context = useContext(ThemeContext)
  // Protección: lanza error si se usa fuera del ThemeProvider
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider")
  }
  return context
}