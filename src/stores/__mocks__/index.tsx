import { FC } from 'react'
import { BlogContext, initialBlogState } from '@/stores/blog'
import { initialBlogsState } from './blogData'
import { IContextProvider } from '../types'

const BlogContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <BlogContext.Provider
      value={{
        state: { ...initialBlogState, blogs: initialBlogsState },
        dispatch: () => null,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProviderMock
