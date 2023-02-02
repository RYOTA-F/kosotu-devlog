import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
/* Components */
import BreadCrumb from '@/components/organisms/BreadCrumb'
import Profile from '@/components/molecules/Profile'
import Seo from '@/components/organisms/Seo'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import { MainWrapper, Main, Aside } from './index.styles'

export interface IDefaultLayout {
  children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  const { isPC } = useMediaQuery()

  return (
    <div aria-label={ARIA_LABEL.DEFAULT_LAYOUT}>
      <Seo />
      <Header />
      <BreadCrumb />
      <MainWrapper isPC={isPC}>
        <Main>{children}</Main>
        <Aside isPC={isPC}>
          <Profile />
        </Aside>
      </MainWrapper>
      <Footer />
    </div>
  )
}

export default DefaultLayout
export * from './const'
