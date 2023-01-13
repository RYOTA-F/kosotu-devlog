/* Const */
import { MAX_BLOG_COUNT, PAGE } from '@/const/index'

/**
 * ページのパスを取得
 */
export const getPagePaths = (totalCount: number) => {
  const pageCount = Math.ceil(totalCount / MAX_BLOG_COUNT) - 1
  const pageNumbers = [...Array(pageCount)].map((_, i) => pageCount + i)

  return pageNumbers.map((id) => `${PAGE.PAGE}${id}`)
}
