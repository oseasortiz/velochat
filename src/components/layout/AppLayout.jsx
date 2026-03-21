// AppLayout - esqueleto visual que se repite en todas las páginas
// Divide la pantalla en dos partes:
// → Sidebar izquierdo (fijo) - Dany lo construye en Fase 3
// → Contenido principal (cambia según la URL con Outlet)

import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    // flex → sidebar y contenido van lado a lado
    // h-screen → ocupa toda la altura de la pantalla
    // overflow-hidden → evita scroll doble en la página
    <div className="flex h-screen w-full overflow-hidden">

      {/* SIDEBAR - hidden en móvil, visible desde md (768px) en adelante */}
      <aside className="hidden md:flex w-[340px] flex-shrink-0 border-r">
        <div className="flex flex-col w-full p-4">
          {/* Placeholder temporal - Dany llenará esto en Fase 3 */}
          {/* Irá: lista de chats, buscador, perfil del usuario   */}
          <p className="text-sm opacity-50">
            Sidebar — se construye en Fase 3
          </p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL - flex-1 = ocupa todo el espacio restante */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Outlet muestra la página según la URL actual:  */}
        {/* /          → HomePage                          */}
        {/* /chat/:id  → ChatPage (Fase 4)                 */}
        {/* /perfil    → ProfilePage (Fase 3)              */}
        <Outlet />
      </main>

    </div>
  )
}