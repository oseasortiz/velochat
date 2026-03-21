// ThemeToggle - botón para cambiar entre modo oscuro y claro
// Importa useTheme para leer el tema actual y poder cambiarlo
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export function ThemeToggle() {
  // theme → "dark" o "light"
  // toggleTheme → función que alterna entre los dos
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}        // cambia el tema al hacer click
      aria-label="Cambiar tema"    // accesibilidad para lectores de pantalla
      className="
        p-2 rounded-lg
        text-muted-foreground      
        hover:text-foreground      
        hover:bg-accent            
        transition-all duration-200
      "
    >
      {/* Muestra Sol en modo oscuro, Luna en modo claro */}
      {theme === "dark"
        ? <Sun className="h-5 w-5" />   // oscuro → muestra sol
        : <Moon className="h-5 w-5" />  // claro  → muestra luna
      }
    </button>
  )
}