import { FC } from 'react'
/* Contexts */
import BlogContextProvider from './blog/context'
/* Types */
import { IContextProvider } from './types'

const RootContextProvider: FC<IContextProvider> = ({ children }) => {
  return <BlogContextProvider>{children}</BlogContextProvider>
}

export default RootContextProvider
