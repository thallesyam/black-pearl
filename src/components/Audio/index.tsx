import { useAudio } from "../../contexts/AudioContext"
import { AudioImage } from "../AudioImage"
import { ButtonsWrapper } from "../ButtonsWrapper"
import { ProgressBar } from "../ProgressBar"

type IAudio = {
  title: string
  url: string
  isShowButtons?: boolean
  isShowTimebox?: number
  currentTime?: number
  videoTime?: number
}

export function Audio({ isShowButtons = true, isShowTimebox, title, url, currentTime, videoTime }: IAudio) {
  const { audioPlaying } = useAudio()

  const currentTimeToSeconds = currentTime / 60
  const progressInMinutes = currentTimeToSeconds / videoTime
  const barPercentage = Math.trunc(progressInMinutes * 100)

  return (
    <section className="w-full px-4 py-3 bg-white-dark rounded-lg flex justify-between items-center gap-1">
      <div className="flex items-center gap-1">
        {audioPlaying === url ? (
          <AudioImage url={url} playing/>
        ) : (
          <AudioImage url={url}/>
        )}

        <div>
          <p className="text-xxs font-medium">{title}</p>
          {isShowTimebox && <p className="text-xxs">{isShowTimebox} min</p>}
        </div>
      </div>

      {isShowButtons && <ProgressBar percentage={barPercentage} isAudioPlaying={audioPlaying === url} />}

      {isShowButtons && <ButtonsWrapper />}
    </section>
  )
}
