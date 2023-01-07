import { FC } from 'react'
import { BlogContext, initialBlogState } from '@/stores/blog'
import { blogsStateMock } from './mock'
import { IContextProvider } from '../../types'

const BlogContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <BlogContext.Provider
      value={{
        state: {
          ...initialBlogState,
          blogs: blogsStateMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProviderMock
