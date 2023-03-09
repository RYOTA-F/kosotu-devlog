import { FC, createContext, useReducer } from 'react'
/* State */
import { initialBlogState } from '../state'
/* Reducer */
import { blogReducer } from '../reducer'
/* Types */
import { IBlogContext } from './types'
import { IContextProvider } from '../../types'

export const BlogContext = createContext<IBlogContext>({
  state: initialBlogState,
  dispatch: () => null,
})

const BlogContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialBlogState)

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider
