import { AudioImage } from "../AudioImage"
import { ButtonsWrapper } from "../ButtonsWrapper"

type IAudio = {
  title: string
  isShowButtons?: boolean
  isShowTimebox?: number
}

export function Audio({ isShowButtons = true, isShowTimebox, title }: IAudio) {
  return (
    <section className="w-full px-4 py-3 bg-white-dark rounded-lg flex justify-between items-center gap-1">
      <div className="flex items-center gap-1">
        <AudioImage />

        <div>
          <p className="text-xxs font-medium">{title}</p>
          {isShowTimebox && <p className="text-xxs">{isShowTimebox} min</p>}
        </div>
      </div>

      {isShowButtons && <ButtonsWrapper />}
    </section>
  )
}
