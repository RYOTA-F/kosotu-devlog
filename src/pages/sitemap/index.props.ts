import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/src/logic/usecase/microCMS/blog'
import { MicroCmsUsecaseCategory } from '@/src/logic/usecase/microCMS/category'
/* Utils */
import { createSitemapData } from '@/utils/index'

/**
 * 静的ページ用のサイトマップ情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()
  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // ブログ一覧取得
  const { blogs } = await microCmsUsecaseBlog.getBlogs()
  // カテゴリ一覧取得
  const { categories } = await microCmsUsecaseCategory.getCategories()
  // サイトマップ生成
  const sitemap = createSitemapData(blogs, categories)

  return {
    props: {
      sitemap,
    },
  }
}
