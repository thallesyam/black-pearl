import { ReactNode } from "react"

type IButtonBackground = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode
  isLarge?: boolean
}

export function ButtonBackground(props: IButtonBackground) {
  const { children, isLarge = false } = props

  return (
    <button className={`${isLarge ? 'w-10 h-10' : 'w-7 h-7' } rounded-sm bg-white flex items-center justify-center`} {...props}>
      {children}
    </button>
  )
}
