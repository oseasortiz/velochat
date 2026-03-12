import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="hidden md:flex w-[340px] flex-shrink-0 border-r">
        <div className="flex flex-col w-full p-4">
          <p className="text-sm opacity-50">
            Sidebar — se construye en Fase 3
          </p>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}