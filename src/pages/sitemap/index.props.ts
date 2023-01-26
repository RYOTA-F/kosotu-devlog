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
  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // ブログ一覧を取得
  const { blogs } = await microCmsUsecaseBlog.getBlogs()
  // カテゴリ一覧を取得
  const { categories } = await microCmsUsecaseCategory.getCategories()

  // サイトマップ情報を生成
  const sitemap = createSitemapData(blogs, categories)

  return {
    props: {
      sitemap,
    },
  }
}
