import { Outlet } from 'react-router-dom'
import TabBar from './TabBar'

function Layout() {
  return (
    <div className="min-h-screen w-full max-w-[750px] mx-auto bg-surface-inverse text-white relative overflow-x-hidden">
      <main className="pb-32">
        <Outlet />
      </main>
      <TabBar />
    </div>
  )
}

export default Layout
