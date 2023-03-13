import type { AppProps } from 'next/app'
/* Contexts */
import RootContextProvider from '@/stores/index'
/* GTM */
import { googleTagManagerId } from '@/libs/gtag'
import GoogleTagManager from '@/components/organisms/GoogleTagManager'
/* styles */
import './_app.css'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <RootContextProvider>
        <GoogleTagManager googleTagManagerId={googleTagManagerId} />
        <Component {...pageProps} />
      </RootContextProvider>
    </CacheProvider>
  )
}

export default App
