import { FC } from 'react'
import BlogContextProviderMock from './blog'
import CategoryContextProviderMock from './category'
import CommonContextProviderMock from './common'
import TagContextProviderMock from './tag'
import { IContextProvider } from '../types'

const RootContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <CommonContextProviderMock>
      <BlogContextProviderMock>
        <CategoryContextProviderMock>
          <TagContextProviderMock>{children}</TagContextProviderMock>
        </CategoryContextProviderMock>
      </BlogContextProviderMock>
    </CommonContextProviderMock>
  )
}

export default RootContextProviderMock
