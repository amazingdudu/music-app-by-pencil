import { createContext, useContext, useState, useRef, useCallback, useEffect, ReactNode } from 'react'
import { Song, songs } from '../data/songs'

interface PlayerContextType {
  currentSong: Song | null
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  playlist: Song[]
  play: (song?: Song) => void
  pause: () => void
  togglePlay: () => void
  next: () => void
  prev: () => void
  seek: (time: number) => void
  setVolume: (volume: number) => void
}

const PlayerContext = createContext<PlayerContextType | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [playlist] = useState<Song[]>(songs)
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(0.8)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // 初始化 audio 元素
  useEffect(() => {
    const audio = new Audio()
    audio.volume = volume
    audioRef.current = audio

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime)
    })

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })

    audio.addEventListener('ended', () => {
      next()
    })

    audio.addEventListener('play', () => {
      setIsPlaying(true)
    })

    audio.addEventListener('pause', () => {
      setIsPlaying(false)
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const play = useCallback((song?: Song) => {
    const audio = audioRef.current
    if (!audio) return

    if (song) {
      if (audio.src !== song.url) {
        audio.src = song.url
      }
      setCurrentSong(song)
    }

    audio.play().catch(console.error)
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
  }, [])

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause()
    } else if (currentSong) {
      play(currentSong)
    } else if (playlist.length > 0) {
      play(playlist[0])
    }
  }, [isPlaying, pause, play, currentSong, playlist])

  const next = useCallback(() => {
    if (!currentSong || playlist.length === 0) return
    const currentIndex = playlist.findIndex(s => s.id === currentSong.id)
    const nextIndex = (currentIndex + 1) % playlist.length
    play(playlist[nextIndex])
  }, [currentSong, playlist, play])

  const prev = useCallback(() => {
    if (!currentSong || playlist.length === 0) return
    const currentIndex = playlist.findIndex(s => s.id === currentSong.id)
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length
    play(playlist[prevIndex])
  }, [currentSong, playlist, play])

  const seek = useCallback((time: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = time
    setCurrentTime(time)
  }, [])

  const setVolume = useCallback((vol: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = vol
    setVolumeState(vol)
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        playlist,
        play,
        pause,
        togglePlay,
        next,
        prev,
        seek,
        setVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider')
  }
  return context
}
