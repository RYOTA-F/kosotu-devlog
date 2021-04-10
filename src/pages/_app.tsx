import React from 'react'
import '../styles/globals.css'

interface IProps {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: IProps) => {
  return <Component {...pageProps} />
}

export default MyApp
