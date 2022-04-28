import type { AppProps } from 'next/app'
import { SessionProvider  } from 'next-auth/react'
import { UserProvider } from '../contexts/UserContext'
import '../styles/global.css'
import { AudioProvider } from '../contexts/AudioContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider  session={pageProps.session}>
      <UserProvider>
        <AudioProvider>
          <Component {...pageProps} />
        </AudioProvider>
      </UserProvider>
    </SessionProvider>
  )
}

export default MyApp
