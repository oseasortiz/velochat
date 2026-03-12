import { MessageSquare } from "lucide-react"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

export default function HomePage() {
  return (
    <div className="
      relative flex flex-col
      items-center justify-center
      h-full gap-6 text-center p-8
    ">
      {/* Botón de tema arriba a la derecha */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Contenido central */}
      <div className="flex flex-col items-center gap-4 animate-fade-in">
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

      {/* Indicador de fase */}
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