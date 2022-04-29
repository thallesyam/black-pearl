import { useSession } from "next-auth/react"

export function UserImage() {
  const { data, status } = useSession()

  if(status == 'loading') {
    return <p>Loading</p>
  }

  return (
    <div className="flex gap-2 items-center">
      <img src={data?.user?.image} alt={data?.user?.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />

      <div className="flex flex-col">
        <p className="text-white text-xs font-medium">{data?.user?.name}</p>
        <p className="text-white text-xxs font-light">10 audios</p>
      </div>
    </div>
  )
}
