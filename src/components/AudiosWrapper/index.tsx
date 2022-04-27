import { ReactNode } from "react"

type IAudiosWrapper = {
  children: ReactNode
}

export function AudiosWrapper({ children }: IAudiosWrapper) {
  return (
    <section className="w-full px-5 md:max-w-5xl mx-auto">
      <div className="w-full bg-white rounded-lg p-6 relative md:max-w-audioContent md:mx-auto">
        {children}
      </div>
    </section>
  )
}
