import type { FC, ReactNode } from 'react'
/* Components */
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Profile from '@/components/Profile'
import ScrollTopButton from '@/components/Elements/ScrollTopButton'
import Seo, { ISeo } from '@/components/Seo'
/* Const */
import { ARIA_LABEL } from './const'
import { SITE } from '@/const/index'
export interface ILayout {
  children: ReactNode
  seo?: ISeo
}

const Layout: FC<ILayout> = ({ children, seo }) => {
  const seoData = seo
    ? seo
    : {
        title: SITE.TITLE,
        description: SITE.DESCRIPTION,
        url: SITE.URL,
        image: SITE.IMAGE,
      }

  return (
    <div aria-label={ARIA_LABEL.LAYOUT}>
      <Seo {...seoData} />
      <Header />
      <BreadCrumb />
      <main className="max-w-full overflow-x-hidden">
        <div className="flex justify-between py-[60px] tb:pt-5 px-[5%] tb:block sp:block">
          <div className="min-w-[75%] mr-8 tb:mr-0">{children}</div>
          <aside className="min-w-[25%] tb:w-[80%] tb:mx-auto tb:mt-10">
            <Profile />
          </aside>
        </div>
      </main>
      <ScrollTopButton />
      <Footer />
    </div>
  )
}

export default Layout
export * from './const'
