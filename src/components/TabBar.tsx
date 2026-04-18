import { NavLink } from 'react-router-dom'

const tabs = [
  { path: '/', label: '首页', icon: 'home' },
  { path: '/explore', label: '发现', icon: 'compass' },
  { path: '/library', label: '音乐库', icon: 'library' },
  { path: '/profile', label: '我的', icon: 'user' },
]

const icons: Record<string, JSX.Element> = {
  home: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <path d="M9 22V12h6v10"/>
    </svg>
  ),
  compass: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <path d="m16.24 7.76-3.54 3.54a4 4 0 0 1-2.12 1.06l-2.29.38 2.29-.38a4 4 0 0 1 2.12-1.06l3.54-3.54z"/>
    </svg>
  ),
  library: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="m16 6 4 14"/>
      <path d="M12 6v14"/>
      <path d="M8 8v12"/>
      <path d="M4 4v16"/>
    </svg>
  ),
  user: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
    </svg>
  ),
}

function TabBar() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[750px] bg-gradient-to-t from-surface-inverse via-surface-inverse to-transparent pt-4 pb-6 px-4 z-50">
      <div className="bg-surface-card border border-border-subtle rounded-[36px] h-[62px] flex items-center p-1 w-full">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `flex-1 h-full rounded-[26px] flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isActive
                  ? 'bg-accent-primary text-white'
                  : 'text-foreground-secondary'
              }`
            }
          >
            {icons[tab.icon]}
            <span className="text-[10px] font-medium tracking-wide">{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default TabBar
