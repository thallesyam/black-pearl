import type { AppProps } from 'next/app'
import { SessionProvider  } from 'next-auth/react'
import { UserProvider } from '../contexts/UserContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider  session={pageProps.session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}

export default MyApp
