function Library() {
  return (
    <div className="pt-6">
      {/* Title */}
      <div className="px-5 pt-5 pb-3">
        <h1 className="text-[28px] font-bold">音乐库</h1>
      </div>

      {/* Content */}
      <div className="px-4 pb-32">
        {/* 我的收藏 */}
        <div className="px-4 py-4">
          <h2 className="text-lg font-semibold mb-3">我的收藏</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-surface-card rounded-2xl p-4 h-[72px]">
              <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">我喜欢的音乐</p>
                <p className="text-foreground-secondary text-sm">128 首歌曲</p>
              </div>
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
            <div className="flex items-center gap-4 bg-surface-card rounded-2xl p-4 h-[72px]">
              <div className="w-10 h-10 bg-accent-secondary rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">最近播放</p>
                <p className="text-foreground-secondary text-sm">56 首歌曲</p>
              </div>
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
            <div className="flex items-center gap-4 bg-surface-card rounded-2xl p-4 h-[72px]">
              <div className="w-10 h-10 bg-accent-tertiary rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">我的电台</p>
                <p className="text-foreground-secondary text-sm">12 个电台</p>
              </div>
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* 我的歌单 */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">我的歌单</h2>
            <span className="text-accent-primary text-sm">查看全部</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="w-full aspect-square bg-[#2A2A2A] rounded-xl mb-2"></div>
              <p className="text-sm font-medium mb-0.5">深夜emo</p>
              <p className="text-foreground-secondary text-xs">24 首歌曲</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-[#2A2A2A] rounded-xl mb-2"></div>
              <p className="text-sm font-medium mb-0.5">运动节奏</p>
              <p className="text-foreground-secondary text-xs">18 首歌曲</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-[#2A2A2A] rounded-xl mb-2"></div>
              <p className="text-sm font-medium mb-0.5">学习专注</p>
              <p className="text-foreground-secondary text-xs">32 首歌曲</p>
            </div>
            <div>
              <div className="w-full aspect-square bg-[#2A2A2A] rounded-xl mb-2"></div>
              <p className="text-sm font-medium mb-0.5">放松心情</p>
              <p className="text-foreground-secondary text-xs">15 首歌曲</p>
            </div>
          </div>
        </div>

        {/* 本地音乐 */}
        <div className="px-4 py-4">
          <h2 className="text-lg font-semibold mb-3">本地音乐</h2>
          <div className="flex items-center gap-4 bg-surface-card rounded-2xl p-4 h-[72px]">
            <div className="w-10 h-10 bg-surface-elevated rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-medium">本地下载</p>
              <p className="text-foreground-secondary text-sm">36 首歌曲 · 已下载</p>
            </div>
            <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library
