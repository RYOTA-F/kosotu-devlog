import { FC } from 'react'
/* Contexts */
import BlogContextProvider from './blog/context'
import CategoryContextProvider from './category/context'
import CommonContextProvider from './common/context'
/* Types */
import { IContextProvider } from './types'

const RootContextProvider: FC<IContextProvider> = ({ children }) => {
  return (
    <CommonContextProvider>
      <BlogContextProvider>
        <CategoryContextProvider>{children}</CategoryContextProvider>
      </BlogContextProvider>
    </CommonContextProvider>
  )
}

export default RootContextProvider
