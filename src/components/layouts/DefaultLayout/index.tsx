import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

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
