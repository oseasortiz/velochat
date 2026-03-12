import { createContext, useContext, useEffect, useState } from "react"

// 1. Creamos el contexto vacío
const ThemeContext = createContext(null)

// 2. El Provider envuelve toda la app y comparte el tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Lee si el usuario ya eligió un tema antes
    const saved = localStorage.getItem("velochat-theme")
    if (saved) return saved
    // Si no, usa la preferencia del sistema operativo
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  useEffect(() => {
    // Aplica o quita la clase "dark" en el <html>
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    // Guarda la preferencia para la próxima visita
    localStorage.setItem("velochat-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Hook para usar el tema en cualquier componente
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider")
  }
  return context
}