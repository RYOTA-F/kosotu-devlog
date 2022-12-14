import type { AppProps } from 'next/app'
/* styles */
import './styles/normalize.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
