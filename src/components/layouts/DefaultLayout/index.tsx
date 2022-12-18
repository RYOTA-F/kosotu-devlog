import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
/* Components */
import Profile from '@/components/presentationals/Profile'
/* Styles */
import { MainWrapper, Main, Aside } from './index.styles'

export interface IDefaultLayout {
  children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Main>{children}</Main>
        <Aside>
          <Profile />
        </Aside>
      </MainWrapper>
      <Footer />
    </>
  )
}

export default DefaultLayout
