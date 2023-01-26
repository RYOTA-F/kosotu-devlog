import type { AppProps } from 'next/app'
/* Contexts */
import RootContextProvider from '@/stores/index'
/* styles */
import './_app.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootContextProvider>
      <Component {...pageProps} />
    </RootContextProvider>
  )
}

export default App
