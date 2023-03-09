import type { AppProps } from 'next/app'
/* Contexts */
import RootContextProvider from '@/stores/index'
/* GTM */
import { googleTagManagerId } from '@/libs/gtag'
import GoogleTagManager, {
  TGoogleTagManagerId,
} from '@/components/organisms/GoogleTagManager'
/* styles */
import './_app.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootContextProvider>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as TGoogleTagManagerId}
      />
      <Component {...pageProps} />
    </RootContextProvider>
  )
}

export default App
