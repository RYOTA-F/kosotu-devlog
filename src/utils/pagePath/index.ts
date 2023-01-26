/* Const */
import { MAX_BLOG_COUNT, PAGE } from '@/const/index'

/**
 * ページのパスを取得
 */
export const getPagePaths = (totalPage: number) => {
  const pageCount = totalPage - 1
  const pageNumbers = [...new Array(pageCount).keys()].map((_, i) => i + 2)

  return pageNumbers.map((id) => `${PAGE.PAGE}${id}`)
}

/**
 * ページ数の合計を取得
 */
export const getTotalPage = (totalCount: number) => {
  return Math.ceil(totalCount / MAX_BLOG_COUNT)
}
