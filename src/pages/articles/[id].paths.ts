import type { GetStaticPaths } from 'next'
/* Const */
import { PAGE } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'

/**
 * 投稿ID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // ブログ情報
  const { blogs } = await microCmsUsecaseBlog.getBlogs()

  // ページパス生成
  const paths = blogs.map(({ id }) => `${PAGE.ARTICLES}${id}`)

  return {
    paths,
    fallback: false,
  }
}
