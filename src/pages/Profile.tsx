function Profile() {
  return (
    <div className="px-4 pt-6 relative">
      {/* Title */}
      <h1 className="text-[28px] font-bold mb-6 px-1">我的</h1>

      {/* Profile Card */}
      <div className="bg-surface-card rounded-3xl p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-[72px] h-[72px] bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full shadow-[0_4px_12px_rgba(168,85,247,0.4)] flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold mb-1">音乐爱好者</p>
            <p className="text-accent-primary text-[13px]">VIP会员 · 到期时间 2026-12-31</p>
          </div>
          <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex justify-around mb-8 py-2">
        <div className="text-center">
          <p className="text-2xl font-bold mb-1">128</p>
          <p className="text-foreground-secondary text-[13px]">关注</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold mb-1">3.2K</p>
          <p className="text-foreground-secondary text-[13px]">粉丝</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent-primary mb-1">Lv.8</p>
          <p className="text-foreground-secondary text-[13px]">等级</p>
        </div>
      </div>

      {/* 常用功能 */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">常用功能</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface-card rounded-2xl h-[100px] flex flex-col items-center justify-center gap-2">
            <svg className="w-7 h-7 text-accent-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 16l7-7 7 7M12 3v13"/>
            </svg>
            <span className="text-[13px]">会员中心</span>
          </div>
          <div className="bg-surface-card rounded-2xl h-[100px] flex flex-col items-center justify-center gap-2">
            <svg className="w-7 h-7 text-accent-tertiary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
            </svg>
            <span className="text-[13px]">播放历史</span>
          </div>
          <div className="bg-surface-card rounded-2xl h-[100px] flex flex-col items-center justify-center gap-2">
            <svg className="w-7 h-7 text-accent-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"/>
            </svg>
            <span className="text-[13px]">我的下载</span>
          </div>
        </div>
      </div>

      {/* 设置 */}
      <div>
        <h2 className="text-xl font-bold mb-4">设置</h2>
        <div className="bg-surface-card rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between h-14 px-5 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <span className="text-sm">账号设置</span>
            </div>
            <svg className="w-[18px] h-[18px] text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
          <div className="flex items-center justify-between h-14 px-5 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
              </svg>
              <span className="text-sm">夜间模式</span>
            </div>
            <div className="w-11 h-6 bg-accent-primary rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between h-14 px-5 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/>
              </svg>
              <span className="text-sm">隐私与安全</span>
            </div>
            <svg className="w-[18px] h-[18px] text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
          <div className="flex items-center justify-between h-14 px-5">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
              </svg>
              <span className="text-sm">关于我们</span>
            </div>
            <svg className="w-[18px] h-[18px] text-foreground-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Decoration */}
      <div className="absolute top-[600px] left-0 w-full h-[60px] bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent rotate-[10deg] pointer-events-none"></div>
      <div className="absolute top-[680px] left-[10px] w-full h-[80px] bg-gradient-to-b from-transparent via-accent-secondary/10 to-transparent rotate-[-5deg] pointer-events-none"></div>
    </div>
  )
}

export default Profile
