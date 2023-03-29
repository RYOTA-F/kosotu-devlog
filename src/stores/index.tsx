import { FC } from 'react'
/* Contexts */
import BlogContextProvider from './blog/context'
import CategoryContextProvider from './category/context'
import CommonContextProvider from './common/context'
import SitemapContextProvider from './sitemap/context'
import TagContextProvider from './tag/context'
/* Types */
import { IContextProvider } from './types'

const RootContextProvider: FC<IContextProvider> = ({ children }) => {
  return (
    <CommonContextProvider>
      <BlogContextProvider>
        <CategoryContextProvider>
          <TagContextProvider>
            <SitemapContextProvider>{children}</SitemapContextProvider>
          </TagContextProvider>
        </CategoryContextProvider>
      </BlogContextProvider>
    </CommonContextProvider>
  )
}

export default RootContextProvider
