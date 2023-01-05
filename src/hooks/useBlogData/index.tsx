import { useContext } from 'react'
/* Store */
import { BlogContext, BLOG_ACTION_TYPES } from '@/stores/blog'
/* Types */
import { IBlog, ITableOfContents, IBreadCrumb } from '@/types/index'

const useBlogData = () => {
  const { state, dispatch } = useContext(BlogContext)

  /* ブログ */
  const blog = state.blogs[0]
  /* ブログ 一覧 */
  const blogs = state.blogs
  /* 目次 */
  const tableOfContents = state.tableOfContents
  /* パンくず */
  const breadCrumb = state.breadClumb
  /* ブログ 投稿数 */
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

  /** パンくずをセット */
  const setBreadCrumb = (breadCrumb: IBreadCrumb) => {
    dispatch({
      type: BLOG_ACTION_TYPES.UPDATE_BREAD_CRUMB,
      payload: breadCrumb,
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
    breadCrumb,
    setBreadCrumb,
  }
}

export default useBlogData
