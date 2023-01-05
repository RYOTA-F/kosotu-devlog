import type { FC, ReactNode } from 'react'
/* Sections */
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
/* Components */
import BreadCrumb from '@/components/molecules/BreadCrumb'
import Profile from '@/components/molecules/Profile'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Styles */
import { MainWrapper, Main, Aside } from './index.styles'

export interface IDefaultLayout {
  children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  const { breadCrumb } = useCommonData()

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
