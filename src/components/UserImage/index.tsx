export function UserImage() {
  return (
    <div className="flex gap-2 items-center">
      <img src="/images/eu-hopi.jpeg" alt="User image" className="w-10 h-10 rounded-full" />

      <div className="flex flex-col">
        <p className="text-white text-xs font-medium">Thalles Ian</p>
        <p className="text-white text-xxs font-light">10 audios</p>
      </div>
    </div>
  )
}
