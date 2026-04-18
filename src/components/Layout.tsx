import { Outlet } from 'react-router-dom'
import TabBar from './TabBar'
import PlayerBar from './PlayerBar'

function Layout() {
  return (
    <div className="min-h-screen w-full max-w-[750px] mx-auto bg-surface-inverse text-white relative overflow-x-hidden">
      <main className="pb-44">
        <Outlet />
      </main>
      <PlayerBar />
      <TabBar />
    </div>
  )
}

export default Layout
