import type { FC, ReactNode } from 'react'
/* Components */
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Profile from '@/components/Profile'
import ScrollTopButton from '@/components/Elements/ScrollTopButton'
import Seo from '@/components/Seo'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import { MainWrapper, Main, Aside } from './index.styles'

export interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  const { isPC } = useMediaQuery()

  return (
    <div aria-label={ARIA_LABEL.LAYOUT}>
      <Seo />
      <Header />
      <BreadCrumb />
      <MainWrapper isPC={isPC}>
        <Main>{children}</Main>
        <Aside isPC={isPC}>
          <Profile />
        </Aside>
      </MainWrapper>
      <ScrollTopButton />
      <Footer />
    </div>
  )
}

export default Layout
export * from './const'
