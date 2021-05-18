/**
 * BlogContexts
 * @packages Contexts 
 */
import React from 'react'
/* types */
import { BlogItemType } from '@/types/blog'

/* type */
export type BlogStateType = {
  blogList: BlogItemType[]
  totalCount: number
}

/* State */
const initState: Readonly<BlogStateType> = {
  blogList: [],
  totalCount: 0,
}

/* Context */
const BlogStateContext = React.createContext(initState as BlogStateType)
const BlogDispatchContext = React.createContext(() => {
  throw new TypeError('Context not provided.')
})

/* Action */
const ActionType = {
  SET: 'BLOG:SET_BLOG',
}

export const setBlogList = (blogList: BlogItemType[], totalCount: number) => ({
  type: ActionType.SET,
  payload: {
    blogList,
    totalCount,
  },
})

export const useBlogState = () => React.useContext(BlogStateContext)
export const useBlogDispatch = () => React.useContext(BlogDispatchContext)