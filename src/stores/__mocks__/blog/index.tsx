import { FC } from 'react'
import { BlogContext, initialBlogState } from '@/stores/blog'
import { blogsStateMock, tableOfContentsStateMock } from './mock'
import { IContextProvider } from '../../types'

const BlogContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <BlogContext.Provider
      value={{
        state: {
          ...initialBlogState,
          blogs: blogsStateMock,
          tableOfContents: tableOfContentsStateMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProviderMock
