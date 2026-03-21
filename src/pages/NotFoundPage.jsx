// NotFoundPage - página de error 404
// Se muestra cuando el usuario entra a una URL que no existe
// Ejemplo: velochat.app/algo-que-no-existe → muestra esta página

import { Link } from "react-router-dom"
import { Home } from "lucide-react"

export default function NotFoundPage() {
  return (
    // h-screen → ocupa toda la pantalla
    <div className="flex flex-col items-center justify-center h-screen gap-4">

      {/* Número 404 grande como elemento visual */}
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <p className="text-xl">Página no encontrada</p>

      {/* Link de React Router - navega sin recargar la página */}
      <Link
        to="/"
        className="flex items-center gap-2 text-primary hover:underline"
      >
        <Home className="h-4 w-4" />
        Volver al inicio
      </Link>

    </div>
  )
}