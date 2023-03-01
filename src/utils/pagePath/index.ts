/* Const */
import { MAX_BLOG_COUNT, PAGE } from '@/const/index'

type TGetPagePathsType = 'home' | 'category' | 'tag'

/**
 * ページのパスを取得
 */
export const getPagePaths = (
  totalPage: number,
  type: TGetPagePathsType,
  slug?: string
) => {
  const pageCount = totalPage - 1
  const pageNumbers = [...new Array(pageCount).keys()].map((_, i) => i + 2)

  switch (type) {
    case 'home':
      return pageNumbers.map((id) => `${PAGE.PAGE}${id}`)
    case 'category':
      return pageNumbers.map((id) => `${PAGE.CATEGORY}${String(slug)}/${id}`)
    default:
      return []
  }
}

/**
 * ページ数の合計を取得
 */
export const getTotalPage = (totalCount: number) => {
  return Math.ceil(totalCount / MAX_BLOG_COUNT)
}
