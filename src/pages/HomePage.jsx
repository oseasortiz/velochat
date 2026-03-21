// HomePage - pantalla de bienvenida después del login
// Se muestra cuando no hay ninguna conversación abierta
// En Fase 3 se reemplazará por la lista de conversaciones

import { MessageSquare } from "lucide-react"
import { ThemeProvider } from "@/context/ThemeContext"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

export default function HomePage() {
  return (
    // relative → permite posicionar el ThemeToggle con absolute
    // h-full → ocupa toda la altura del main en AppLayout
    <div className="
      relative flex flex-col
      items-center justify-center
      h-full gap-6 text-center p-8
    ">
      {/* ThemeToggle fijo arriba a la derecha */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Contenido central de bienvenida */}
      <div className="flex flex-col items-center gap-4 animate-fade-in">

        {/* Ícono principal - bg-primary/10 = azul con 10% opacidad */}
        <div className="p-4 rounded-2xl bg-primary/10">
          <MessageSquare className="h-12 w-12 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">
          Bienvenido a VeloChat
        </h1>

        <p className="text-muted-foreground max-w-sm">
          Selecciona una conversación para comenzar,
          o busca un contacto para iniciar una nueva.
        </p>

      </div>

      {/* Indicador del estado del proyecto - se elimina en Fase 2 */}
      <div className="
        mt-8 px-3 py-1 rounded-full
        bg-muted text-muted-foreground
        text-xs font-mono
      ">
        ✓ Fase 1 completada — Auth viene en Fase 2
      </div>

    </div>
  )
}