/**
 * ブログAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
import { initBlogData } from '@/constants/initState'
/* types */
import { BlogDataType } from '@/types/blog'

/**
 * constant
 */
const BASE_URL = `${process.env.BASE_END_POINT}blogs/`
const QUERY_OFFSET = '?offset='
const QUERY_LIMIT = '&limit='

/**
 * ブログ一覧取得
 * @param offset number
 * @returns blogData BlogDataType
 */
export const getBlogs = async (offset: number) => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(
      BASE_URL + QUERY_OFFSET + offset + QUERY_LIMIT + BLOG_SHOW_COUNT
    )

    blogData.blogList = res.data.contents
    blogData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogs`)
  }

  return blogData
}
