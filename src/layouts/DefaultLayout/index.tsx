import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '../../sections/Header'
import Footer from '../../sections/Footer'

export interface IDefaultLayout {
  children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
