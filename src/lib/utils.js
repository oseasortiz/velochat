import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Esta función hace DOS cosas:
// 1. clsx → convierte objetos/arrays en strings de clases
// 2. twMerge → elimina clases de Tailwind en conflicto
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}