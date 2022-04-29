import type { AppProps } from 'next/app'
import { SessionProvider  } from 'next-auth/react'
import { UserProvider } from '../contexts/UserContext'
import { AudioProvider } from '../contexts/AudioContext'

import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css'

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
