import { FC } from 'react'
import BlogContextProviderMock from './blog'
import { IContextProvider } from '../types'

const RootContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return <BlogContextProviderMock>{children}</BlogContextProviderMock>
}

export default RootContextProviderMock
