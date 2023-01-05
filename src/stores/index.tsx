import { FC } from 'react'
/* Contexts */
import BlogContextProvider from './blog/context'
import CommonContextProvider from './common/context'
/* Types */
import { IContextProvider } from './types'

const RootContextProvider: FC<IContextProvider> = ({ children }) => {
  return (
    <CommonContextProvider>
      <BlogContextProvider>{children}</BlogContextProvider>
    </CommonContextProvider>
  )
}

export default RootContextProvider
