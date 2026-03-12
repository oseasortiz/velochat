import { Link } from "react-router-dom"
import { Home } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <p className="text-xl">Página no encontrada</p>
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