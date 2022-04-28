import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react'


type IUserContext = {
  handleClickSignIn: () => void
  handleClickSignOut: () => void
  isLogged: boolean
}

type IUserProvider = {
  children: ReactNode
}

const UserContext = createContext({} as IUserContext)

export function UserProvider({ children }: IUserProvider) {
  const { data } = useSession()
  const [ isLogged, setIsLogged ] = useState(false)

  useEffect(() => {
    if(!!data?.user) {
      setIsLogged(false)
    }

    const isLogged = !!data?.user
    setIsLogged(isLogged)

  }, [data?.user])

  function handleClickSignIn() {
    signIn('google')
  }

  function handleClickSignOut() {
    signOut()
  }

  return (
    <UserContext.Provider value={{handleClickSignIn, handleClickSignOut, isLogged}}>
      { children }
    </UserContext.Provider>
  )
} 

export const useUser = () => useContext(UserContext)
