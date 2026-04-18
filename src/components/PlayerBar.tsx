import { usePlayer } from '../context/PlayerContext'
import { formatTime } from '../data/songs'

function PlayerBar() {
  const { currentSong, isPlaying, currentTime, duration, togglePlay, next, prev, seek } = usePlayer()

  if (!currentSong) return null

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    seek(percent * duration)
  }

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[750px] bg-surface-card/95 backdrop-blur-sm rounded-2xl p-4 mx-4">
      {/* Progress Bar */}
      <div
        className="w-full h-1 bg-surface-elevated rounded-full mb-3 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-accent-primary rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Cover */}
        <div
          className="w-12 h-12 rounded-lg flex-shrink-0"
          style={{ backgroundColor: currentSong.cover }}
        />

        {/* Song Info */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{currentSong.title}</p>
          <p className="text-foreground-secondary text-xs truncate">{currentSong.artist}</p>
        </div>

        {/* Time */}
        <span className="text-foreground-secondary text-xs tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button onClick={prev} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 20 9 12l10-8v16zM5 19h2V5H5v14z"/>
            </svg>
          </button>

          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <button onClick={next} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m5 4 10 8-10 8V4zm14 1v14"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerBar
