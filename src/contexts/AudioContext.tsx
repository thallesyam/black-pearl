import { createContext, ReactNode, useContext, useRef, useState } from "react";

type IAudioContext = {
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

  return (
    <AudioContext.Provider value={{ handleClickPlay, handleClickPause, audioPlaying, isPLaying }}>
      { children }
    </AudioContext.Provider>
  )
} 

export const useAudio = () => useContext(AudioContext)
