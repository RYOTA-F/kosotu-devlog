import { useContext } from 'react'
/* Store */
import { BlogContext, BLOG_ACTION_TYPES } from '@/stores/blog'
/* Types */
import { IBlog, ITableOfContents } from '@/types/index'

const useBlogData = () => {
  const { state, dispatch } = useContext(BlogContext)

  /** ブログ一件 */
  const blog = state.blogs[0]
  /** ブログ一覧 */
  const blogs = state.blogs
  /** 目次 */
  const tableOfContents = state.tableOfContents

  const totalCount = state.totalCount

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

  /** 目次をセット */
  const setTableOfContents = (tableOfContents: ITableOfContents[]) => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
      payload: tableOfContents,
    })
  }

  return {
    blog,
    blogs,
    setBlogs,
    totalCount,
    setTotalCount,
    tableOfContents,
    setTableOfContents,
  }
}

export default useBlogData
