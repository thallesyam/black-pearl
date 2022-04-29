type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  text: string | JSX.Element
}

export function Button(props: IButton) {
  const { text } = props

  return (
    <button {...props}>
      {text}
    </button>
  )
}
