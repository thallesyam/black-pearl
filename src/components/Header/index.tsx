import { Button } from "../Button"
import { UserImage } from "../UserImage"

export function Header() {
  const isLogged = true

  return (
    <header className="bg-primary-dark w-full py-8">
      <div className="flex items-center justify-between px-8 md:max-w-5xl mx-auto">
        {isLogged && (
          <>
            <UserImage />
      
            <Button text="Logout" className="w-16 py-3 text-xxs font-light" />
          </>
        )}
      </div>
    </header>
  )
}