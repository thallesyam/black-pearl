type ITitle = {
  title: string
}

export function Title({ title }: ITitle) {
  return (
    <h1 className="text-primary-dark text-2xl font-bold">{title}</h1>

  )
}
