import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type IInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string
  isshowlabel?: string,
  textlabel?: string
}

export function Input(props: IInput) {
  const { name, isshowlabel, textlabel = ''} = props

  return (
    <div className="w-full flex flex-col gap-1">
      {!!isshowlabel && <label htmlFor={name} className="mb-2 text-black-light font-medium text-xs">{textlabel}</label>}

      <input name={name} id={name} {...props} />
    </div>
  )
}
