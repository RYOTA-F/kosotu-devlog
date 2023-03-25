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

export interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => (
  <div aria-label={ARIA_LABEL.LAYOUT}>
    <Seo />
    <Header />
    <BreadCrumb />
    <main className="max-w-full overflow-x-hidden">
      <div className="flex justify-between py-[60px] px-[5%] tb:block sp:block">
        <div className="min-w-[75%]">{children}</div>
        <aside className="min-w-[25%] tb:w-[80%] tb:mx-auto tb:mt-10">
          <Profile />
        </aside>
      </div>
    </main>
    <ScrollTopButton />
    <Footer />
  </div>
)

export default Layout
export * from './const'
