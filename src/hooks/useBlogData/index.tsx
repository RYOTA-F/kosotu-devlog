import { useContext } from 'react'
/* Store */
import { BlogContext, BLOG_ACTION_TYPES } from '@/stores/blog'
/* Types */
import { IBlog, ITableOfContents, IBreadCrumb } from '@/types/index'

const useBlogData = () => {
  const { state, dispatch } = useContext(BlogContext)

  // ブログ
  const blog = state.blogs[0]
  // ブログ一覧
  const blogs = state.blogs
  // 目次
  const tableOfContents = state.tableOfContents
  // パンくず
  const breadCrumb = state.breadClumb

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

  /** パンくずをセット */
  const setBreadCrumb = (breadCrumb: IBreadCrumb) => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_BREAD_CRUMB,
      payload: breadCrumb,
    })
  }

  /** パンくずをリセット */
  const resetBreadCrumb = () => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_BREAD_CRUMB,
      payload: undefined,
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
    breadCrumb,
    setBreadCrumb,
    resetBreadCrumb,
  }
}

export default useBlogData
