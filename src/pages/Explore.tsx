function Explore() {
  return (
    <div className="px-4 pt-6">
      {/* Search Section */}
      <div className="flex gap-3 px-4 py-4">
        <div className="flex-1 flex items-center gap-3 bg-surface-card h-12 rounded-2xl px-4">
          <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m21 21-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>
          </svg>
          <span className="text-foreground-secondary text-[15px]">搜索音乐、歌手、专辑...</span>
        </div>
        <div className="w-12 h-12 bg-surface-card rounded-2xl flex items-center justify-center">
          <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
          </svg>
        </div>
      </div>

      {/* Category Tags */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 py-2 mb-4">
        <div className="flex-shrink-0 px-4 h-8 bg-accent-primary rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">推荐</span>
        </div>
        <div className="flex-shrink-0 px-4 h-8 bg-surface-card rounded-full flex items-center justify-center">
          <span className="text-sm text-foreground-secondary">流行</span>
        </div>
        <div className="flex-shrink-0 px-4 h-8 bg-surface-card rounded-full flex items-center justify-center">
          <span className="text-sm text-foreground-secondary">摇滚</span>
        </div>
        <div className="flex-shrink-0 px-4 h-8 bg-surface-card rounded-full flex items-center justify-center">
          <span className="text-sm text-foreground-secondary">电子</span>
        </div>
        <div className="flex-shrink-0 px-4 h-8 bg-surface-card rounded-full flex items-center justify-center">
          <span className="text-sm text-foreground-secondary">古典</span>
        </div>
        <div className="flex-shrink-0 px-4 h-8 bg-surface-card rounded-full flex items-center justify-center">
          <span className="text-sm text-foreground-secondary">爵士</span>
        </div>
      </div>

      {/* 热门推荐 */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[22px] font-bold">热门推荐</h2>
          <div className="flex items-center gap-1 text-foreground-secondary">
            <span className="text-sm">更多</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="w-[280px] h-[200px] bg-surface-card rounded-2xl p-4 flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="w-full h-[120px] bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mb-3">
              <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">本周流行金曲</p>
            <p className="text-foreground-secondary text-[13px]">发现最新热门音乐</p>
          </div>
          <div className="w-[280px] h-[200px] bg-surface-card rounded-2xl p-4 flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="w-full h-[120px] bg-gradient-to-br from-accent-tertiary to-accent-primary rounded-xl flex items-center justify-center mb-3">
              <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">电子音乐精选</p>
            <p className="text-foreground-secondary text-[13px]">沉浸式电子节拍</p>
          </div>
          <div className="w-[280px] h-[200px] bg-surface-card rounded-2xl p-4 flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="w-full h-[120px] bg-gradient-to-br from-accent-secondary to-accent-tertiary rounded-xl flex items-center justify-center mb-3">
              <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">深夜治愈</p>
            <p className="text-foreground-secondary text-[13px]">温柔陪伴每一刻</p>
          </div>
        </div>
      </div>

      {/* 新碟上架 */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[22px] font-bold">新碟上架</h2>
          <div className="flex items-center gap-1 text-foreground-secondary">
            <span className="text-sm">更多</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="w-[120px] flex-shrink-0">
            <div className="w-[120px] h-[120px] bg-gradient-to-b from-accent-primary to-[#6B21A8] rounded-xl flex items-center justify-center mb-2">
              <svg className="w-10 h-10 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </div>
            <p className="text-sm font-medium truncate">Midnight</p>
          </div>
          <div className="w-[120px] flex-shrink-0">
            <div className="w-[120px] h-[120px] bg-gradient-to-b from-accent-secondary to-[#BE185D] rounded-xl flex items-center justify-center mb-2">
              <svg className="w-10 h-10 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </div>
            <p className="text-sm font-medium truncate">Pink Dreams</p>
          </div>
          <div className="w-[120px] flex-shrink-0">
            <div className="w-[120px] h-[120px] bg-gradient-to-b from-accent-tertiary to-[#0891B2] rounded-xl flex items-center justify-center mb-2">
              <svg className="w-10 h-10 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </div>
            <p className="text-sm font-medium truncate">Ocean Blue</p>
          </div>
          <div className="w-[120px] flex-shrink-0">
            <div className="w-[120px] h-[120px] bg-gradient-to-b from-[#F59E0B] to-[#B45309] rounded-xl flex items-center justify-center mb-2">
              <svg className="w-10 h-10 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </div>
            <p className="text-sm font-medium truncate">Golden Hour</p>
          </div>
        </div>
      </div>

      {/* 排行榜 */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[22px] font-bold">排行榜</h2>
          <div className="flex items-center gap-1 text-foreground-secondary">
            <span className="text-sm">更多</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-surface-card rounded-xl p-4 h-[120px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-accent-primary rounded text-[11px] font-bold">热歌</span>
              <span className="font-semibold text-base">热歌榜</span>
            </div>
            <p className="text-foreground-secondary text-xs leading-relaxed">
              1. 晴天 - 周杰伦<br/>2. 十年 - 陈奕迅
            </p>
          </div>
          <div className="bg-surface-card rounded-xl p-4 h-[120px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-accent-secondary rounded text-[11px] font-bold">新歌</span>
              <span className="font-semibold text-base">新歌榜</span>
            </div>
            <p className="text-foreground-secondary text-xs leading-relaxed">
              1. 像风一样<br/>2. 漠河舞厅
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
