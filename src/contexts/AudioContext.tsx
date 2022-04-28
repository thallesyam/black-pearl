import { createContext, ReactNode, useContext, useState } from "react";

type IAudioContext = {
  audioEnded: (playlist: string[], currentAudioIndex: number) => void
  handleClickPlay: (url: string) => void
  handleClickPause: () => void
  audioPlaying: string
  isPLaying: boolean
}

type IAudioProvider = {
  children: ReactNode
}

const AudioContext = createContext({} as IAudioContext)

export function AudioProvider({ children }: IAudioProvider) {
  const [audioPlaying, setAudioPlaying] = useState('')
  const [isPLaying, setIsPlaying] = useState(false)

  function handleClickPlay(url: string) {
    setAudioPlaying(url)
    setIsPlaying(true)
  }

  function handleClickPause() {
    setAudioPlaying('')
    setIsPlaying(false)
  }

  function audioEnded(playlist: string[], currentAudioIndex: number) {
    const playlistLengthValidation = currentAudioIndex >= playlist.length

    if(playlistLengthValidation) {
      setAudioPlaying('')
    }

    const nextAudioIndex = playlist[currentAudioIndex + 1]

    setAudioPlaying(nextAudioIndex)
  }

  return (
    <AudioContext.Provider value={{ handleClickPlay, handleClickPause, audioPlaying, isPLaying, audioEnded }}>
      { children }
    </AudioContext.Provider>
  )
} 

export const useAudio = () => useContext(AudioContext)
