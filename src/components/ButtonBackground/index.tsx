import { ReactNode } from "react"

type IButtonBackground = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode
  islarge?: string
}

export function ButtonBackground(props: IButtonBackground) {
  const { children, islarge = '' } = props

  return (
    <button className={`${islarge !== '' ? 'w-10 h-10' : 'w-7 h-7' } rounded-sm bg-white flex items-center justify-center`} {...props}>
      {children}
    </button>
  )
}
