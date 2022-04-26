import { memo } from "react"

function FooterComponent() {
  return (
    <footer className="bg-primary-dark w-100 flex items-center justify-center px-8 py-6">
      <p className="text-base text-white">Criado por Thalles Ian com 💜</p>
    </footer>
  )
}

export const Footer = memo(FooterComponent)