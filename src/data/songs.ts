export interface Song {
  id: number
  title: string
  artist: string
  duration: number // 秒
  url: string
  cover: string // 颜色或图片 URL
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: "Cyber Wave",
    duration: 225, // 3:45
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "#A855F7"
  },
  {
    id: 2,
    title: "Midnight City",
    artist: "M83",
    duration: 243, // 4:03
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "#EC4899"
  },
  {
    id: 3,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200, // 3:20
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "#06B6D4"
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Dua Lipa",
    duration: 203, // 3:23
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "#F59E0B"
  },
  {
    id: 5,
    title: "Stay",
    artist: "Kid LAROI & Justin Bieber",
    duration: 141, // 2:21
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "#10B981"
  },
  {
    id: 6,
    title: "Electronic Vibes",
    artist: "Synth Master",
    duration: 267, // 4:27
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "#8B5CF6"
  },
  {
    id: 7,
    title: "Deep House",
    artist: "Club Beats",
    duration: 312, // 5:12
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: "#EC4899"
  },
  {
    id: 8,
    title: "Chill Wave",
    artist: "Lofi Dreamer",
    duration: 198, // 3:18
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover: "#06B6D4"
  },
]

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
