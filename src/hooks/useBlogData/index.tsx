import { useContext } from 'react'
/* Stores */
import { BlogContext, BLOG_ACTION_TYPES } from '@/stores/blog'
/* Types */
import { IBlog, ITableOfContents } from '@/types/index'

const useBlogData = () => {
  const { state, dispatch } = useContext(BlogContext)

  // ブログ
  const blog = state.blogs[0]
  // ブログ一覧
  const blogs = state.blogs
  // 目次
  const tableOfContents = state.tableOfContents

  /** ブログ一覧をセット */
  const setBlogs = (blogs: IBlog[]) => {
    dispatch({ type: BLOG_ACTION_TYPES.UPDATE_BLOGS, payload: blogs })
  }
  /** ブログ一覧をリセット */
  const resetBlogs = () => {
    dispatch({ type: BLOG_ACTION_TYPES.UPDATE_BLOGS, payload: [] })
  }

  /** 目次をセット */
  const setTableOfContents = (tableOfContents: ITableOfContents[]) => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
      payload: tableOfContents,
    })
  }

  /** 目次をセット */
  const resetTableOfContents = () => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
      payload: [],
    })
  }

  return {
    blog,
    blogs,
    setBlogs,
    resetBlogs,
    tableOfContents,
    setTableOfContents,
    resetTableOfContents,
  }
}

export default useBlogData
