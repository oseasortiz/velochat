// Configuración de Vite - la herramienta que compila el proyecto
// Sin este archivo: import X from "../../../components/X" (feo y difícil)
// Con este archivo: import X from "@/components/X" (limpio y fácil) ✅

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react() // activa el soporte para React y JSX
  ],
  resolve: {
    alias: {
      // @ apunta siempre a la carpeta src/
      // Todos los imports del proyecto usan @ en vez de rutas relativas
      "@": path.resolve(__dirname, "./src"),
    },
  },
})