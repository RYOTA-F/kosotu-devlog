import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
/* Components */
import Profile from '@/components/presentationals/Profile'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { MainWrapper, Main, Aside } from './index.styles'

export interface IDefaultLayout {
  children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  return (
    <div aria-label={ARIA_LABEL.DEFAULT_LAYOUT}>
      <Header />
      <MainWrapper>
        <Main>{children}</Main>
        <Aside>
          <Profile />
        </Aside>
      </MainWrapper>
      <Footer />
    </div>
  )
}

export default DefaultLayout
export * from './const'
