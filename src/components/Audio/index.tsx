import { AudioImage } from "../AudioImage"
import { ButtonsWrapper } from "../ButtonsWrapper"

type IAudio = {
}

export function Audio({ }: IAudio) {
  return (
    <section className="w-full px-4 py-3 bg-white-dark rounded-lg flex justify-between items-center gap-1">
      <div className="flex items-center gap-1">
        <AudioImage />

        <div>
          <p className="text-xxs font-medium">The Boy who Flew too High Natalie</p>
          <p className="text-xxs">5 min</p>
        </div>
      </div>

      <ButtonsWrapper />
    </section>
  )
}
