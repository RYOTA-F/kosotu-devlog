import type { AppProps } from 'next/app'
/* Contexts */
import RootContextProvider from '@/stores/index'
/* styles */
import './styles/normalize.css'
import './styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootContextProvider>
      <Component {...pageProps} />
    </RootContextProvider>
  )
}

export default App
