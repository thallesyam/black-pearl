import { ReactNode } from "react"

type IButtonBackground = {
  children: ReactNode
  isLarge?: boolean
}

export function ButtonBackground({ children, isLarge = false }: IButtonBackground) {
  return (
    <div className={`${isLarge ? 'w-10 h-10' : 'w-7 h-7' } rounded-sm bg-white flex items-center justify-center`}>
      {children}
    </div>
  )
}
