import { FC } from 'react'
import { BlogContext, initialBlogState } from '@/stores/blog'
import type { IContextProvider } from '@/stores/types'
import { blogsMock } from '@/logic/usecase/microCMS/blog/__mocks__'

const BlogContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <BlogContext.Provider
      value={{
        state: {
          ...initialBlogState,
          blogs: blogsMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProviderMock
