import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type IInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string
  isLabel?: boolean,
  textlabel?: string
}

export function Input(props: IInput) {
  const { name, isLabel = false, textlabel = ''} = props

  return (
    <div className="w-full flex flex-col gap-1">
      {isLabel && <label htmlFor={name} className="mb-2 text-black-light font-medium text-xs">{textlabel}</label>}

      <input name={name} id={name} {...props} />
    </div>
  )
}
