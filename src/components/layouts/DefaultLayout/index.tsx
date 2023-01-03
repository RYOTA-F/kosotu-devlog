import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
/* Components */
import BreadCrumb from '@/components/presentationals/BreadCrumb'
import Profile from '@/components/presentationals/Profile'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { MainWrapper, Main, Aside } from './index.styles'
/* Types */
import { IBlogBreadCrumb } from '@/types/index'

export interface IDefaultLayout {
  children: ReactNode
  breadCrumb?: IBlogBreadCrumb
}

const DefaultLayout: FC<IDefaultLayout> = ({ children, breadCrumb }) => {
  return (
    <div aria-label={ARIA_LABEL.DEFAULT_LAYOUT}>
      <Header />
      {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} />}
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
