// Utilidad para combinar clases de Tailwind sin conflictos
// Se usa en todos los componentes de la app así:
// className={cn("flex p-4", isActive && "bg-blue-500")}

import { clsx } from "clsx"         // une clases en un string
import { twMerge } from "tailwind-merge" // elimina clases duplicadas

export function cn(...inputs) {
  // ...inputs = acepta cualquier cantidad de clases
  // clsx las une primero, twMerge limpia conflictos después
  // Ejemplo: cn("p-4", "p-8") → "p-8"  (gana la última)
  return twMerge(clsx(inputs))
}