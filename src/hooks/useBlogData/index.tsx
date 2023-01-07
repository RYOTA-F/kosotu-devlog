import { useContext } from 'react'
/* Stores */
import { BlogContext, BLOG_ACTION_TYPES } from '@/stores/blog'
/* Types */
import { IBlog } from '@/types/index'

const useBlogData = () => {
  const { state, dispatch } = useContext(BlogContext)

  // ブログ
  const blog = state.blogs[0]
  // ブログ一覧
  const blogs = state.blogs

  /** ブログ一覧をセット */
  const setBlogs = (blogs: IBlog[]) => {
    dispatch({ type: BLOG_ACTION_TYPES.UPDATE_BLOGS, payload: blogs })
  }
  /** ブログ一覧をリセット */
  const resetBlogs = () => {
    dispatch({ type: BLOG_ACTION_TYPES.UPDATE_BLOGS, payload: [] })
  }

  return {
    blog,
    blogs,
    setBlogs,
    resetBlogs,
  }
}

export default useBlogData
