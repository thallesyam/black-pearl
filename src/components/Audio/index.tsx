import { useAudio } from "../../contexts/AudioContext"
import { AudioImage } from "../AudioImage"
import { ButtonsWrapper } from "../ButtonsWrapper"

type IAudio = {
  title: string
  url: string
  isShowButtons?: boolean
  isShowTimebox?: number
}

export function Audio({ isShowButtons = true, isShowTimebox, title, url }: IAudio) {
  const { audioPlaying } = useAudio()

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

      {isShowButtons && <ButtonsWrapper />}
    </section>
  )
}
