import { useContext } from 'react'
/* Store */
import { BlogContext, BLOG_ACTION_TYPES } from '@/stores/blog'
/* Types */
import { IBlog } from '@/types/index'

const useBlogData = () => {
  const { state, dispatch } = useContext(BlogContext)

  /** ブログ一件 */
  const blog = state.blogs[0]
  /** ブログ一覧 */
  const blogs = state.blogs

  /** ブログ一覧をセット */
  const setBlogs = (blogs: IBlog[]) => {
    dispatch({ type: BLOG_ACTION_TYPES.UPDATE_BLOGS, payload: blogs })
  }

  /** 投稿数をセット */
  const setTotalCount = (totalCount: number) => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_TOTAL_COUNT,
      payload: totalCount,
    })
  }

  const totalCount = state.totalCount

  return { blog, blogs, setBlogs, setTotalCount, totalCount }
}

export default useBlogData
