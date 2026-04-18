function Home() {
  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold mb-1">晚上好</h1>
          <p className="text-foreground-secondary text-sm">继续聆听你的音乐</p>
        </div>
        <div className="w-12 h-12 bg-surface-card rounded-full flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          </svg>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-surface-card h-[52px] rounded-[26px] px-5 mb-6">
        <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="m21 21-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>
        </svg>
        <span className="text-foreground-secondary text-sm">搜索歌曲、艺术家、专辑...</span>
      </div>

      {/* 热门歌单 */}
      <h2 className="text-xl font-bold mb-4">热门歌单</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide mb-6 -mx-4 px-4">
        <div className="w-[160px] h-[200px] bg-surface-card rounded-2xl flex-shrink-0 relative overflow-hidden">
          <div className="w-full h-[160px] bg-accent-primary relative rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-primary/50"></div>
            <div className="absolute right-3 bottom-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-surface-inverse ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="p-3"><p className="text-sm font-semibold">电子霓虹</p></div>
        </div>
        <div className="w-[160px] h-[200px] bg-surface-card rounded-2xl flex-shrink-0 relative overflow-hidden">
          <div className="w-full h-[160px] bg-accent-secondary relative rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-secondary/50"></div>
            <div className="absolute right-3 bottom-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-surface-inverse ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="p-3"><p className="text-sm font-semibold">深夜emo</p></div>
        </div>
        <div className="w-[160px] h-[200px] bg-surface-card rounded-2xl flex-shrink-0 relative overflow-hidden">
          <div className="w-full h-[160px] bg-accent-tertiary relative rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-tertiary/50"></div>
            <div className="absolute right-3 bottom-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-surface-inverse ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="p-3"><p className="text-sm font-semibold">清新早晨</p></div>
        </div>
      </div>

      {/* 正在播放 */}
      <h2 className="text-xl font-bold mb-4">正在播放</h2>
      <div className="bg-surface-card rounded-3xl p-5 mb-6">
        <div className="bg-surface-elevated rounded-2xl h-[160px] flex items-center justify-center mb-4">
          <div className="w-[140px] h-[140px] bg-accent-primary rounded-xl shadow-[0_8px_32px_rgba(168,85,247,0.25)]"></div>
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-1">Neon Dreams</h3>
          <p className="text-foreground-secondary text-sm">Cyber Wave • Electronic</p>
        </div>
        <div className="flex items-center justify-center gap-6 mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 20 9 12l10-8v16zM5 19h2V5H5v14z"/>
          </svg>
          <div className="w-14 h-14 bg-accent-primary rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          </div>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m5 4 10 8-10 8V4zm14 1v14"/>
          </svg>
        </div>
        <div className="bg-surface-elevated h-1 rounded-full">
          <div className="bg-accent-primary h-1 rounded-full w-2/3"></div>
        </div>
      </div>

      {/* 新歌推荐 */}
      <h2 className="text-xl font-bold mb-4">新歌推荐</h2>
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-4 bg-surface-card rounded-xl p-3 h-[72px]">
          <div className="w-12 h-12 bg-accent-primary rounded-lg flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base truncate">Midnight City</p>
            <p className="text-foreground-secondary text-[13px]">M83</p>
          </div>
          <span className="text-foreground-secondary text-[13px]">4:03</span>
          <svg className="w-5 h-5 text-foreground-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/>
          </svg>
        </div>
        <div className="flex items-center gap-4 bg-surface-card rounded-xl p-3 h-[72px]">
          <div className="w-12 h-12 bg-accent-secondary rounded-lg flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base truncate">Blinding Lights</p>
            <p className="text-foreground-secondary text-[13px]">The Weeknd</p>
          </div>
          <span className="text-foreground-secondary text-[13px]">3:20</span>
          <svg className="w-5 h-5 text-foreground-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/>
          </svg>
        </div>
        <div className="flex items-center gap-4 bg-surface-card rounded-xl p-3 h-[72px]">
          <div className="w-12 h-12 bg-accent-tertiary rounded-lg flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base truncate">Levitating</p>
            <p className="text-foreground-secondary text-[13px]">Dua Lipa</p>
          </div>
          <span className="text-foreground-secondary text-[13px]">3:23</span>
          <svg className="w-5 h-5 text-foreground-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/>
          </svg>
        </div>
        <div className="flex items-center gap-4 bg-surface-card rounded-xl p-3 h-[72px]">
          <div className="w-12 h-12 bg-accent-primary rounded-lg flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base truncate">Stay</p>
            <p className="text-foreground-secondary text-[13px]">Kid LAROI & Justin Bieber</p>
          </div>
          <span className="text-foreground-secondary text-[13px]">2:21</span>
          <svg className="w-5 h-5 text-foreground-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/>
          </svg>
        </div>
      </div>

      {/* Mini Player */}
      <div className="flex items-center gap-3 bg-surface-card rounded-2xl p-3 h-16">
        <div className="w-10 h-10 bg-accent-primary rounded-lg shadow-[0_2px_12px_rgba(168,85,247,0.25)] flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">Neon Dreams</p>
          <p className="text-foreground-secondary text-xs">Cyber Wave</p>
        </div>
        <div className="flex items-center gap-0.5 h-6">
          <div className="w-[3px] h-3 bg-accent-primary rounded-full"></div>
          <div className="w-[3px] h-5 bg-accent-primary rounded-full"></div>
          <div className="w-[3px] h-4 bg-accent-primary rounded-full"></div>
          <div className="w-[3px] h-2 bg-accent-secondary rounded-full"></div>
          <div className="w-[3px] h-3.5 bg-accent-primary rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
