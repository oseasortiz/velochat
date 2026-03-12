import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="
        p-2 rounded-lg
        text-muted-foreground
        hover:text-foreground
        hover:bg-accent
        transition-all duration-200
      "
    >
      {theme === "dark"
        ? <Sun className="h-5 w-5" />
        : <Moon className="h-5 w-5" />
      }
    </button>
  )
}