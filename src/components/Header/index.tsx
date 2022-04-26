import { Button } from "../Button"
import { UserImage } from "../UserImage"

export function Header() {
  const isLogged = true

  return (
    <header className="bg-primary-dark w-full flex items-center justify-between px-8 py-6">
      {isLogged && (
        <>
          <UserImage />
    
          <Button text="Logout" className="w-16 py-3 text-xxs font-light" />
        </>
      )}
    </header>
  )
}
