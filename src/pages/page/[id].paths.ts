import type { GetStaticPaths } from 'next'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
/* Utils */
import { getPagePaths } from '@/utils/index'

/**
 * ページID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // ブログ取得
  const { totalPage } = await microCmsUsecaseBlog.getBlogs()

  // ページパス生成
  const paths = getPagePaths(totalPage, 'home')

  return {
    paths,
    fallback: false,
  }
}
