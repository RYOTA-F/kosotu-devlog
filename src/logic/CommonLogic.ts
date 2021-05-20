import { BLOG_SHOW_COUNT } from '@/constants/config'

/**
 * ページ番号配列作成
 * @param totalCount number
 * @returns
 */
export const createPageArray = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / BLOG_SHOW_COUNT) + 1)].map((_, i) => i + 1)
}
