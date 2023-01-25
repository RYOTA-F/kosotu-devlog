import type { GetStaticProps } from 'next'
/* Const */
import { API } from '@/const/index'
/* Client */
import { client } from '@/libs/index'
/* Types */
import { IBlogsApiResponse, ICategoryApiResponse } from '@/types/index'
/* Utils */
import { createSitemapData } from '@/utils/index'

/**
 * 静的ページ用のサイトマップ情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  // ブログ一覧
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: { limit: 9999 },
  })

  // カテゴリ一覧
  const categories = await client.get<ICategoryApiResponse>({
    endpoint: API.CATEGORY.END_POINT,
    queries: { limit: 9999 },
  })

  // サイトマップ情報を生成
  const sitemap = createSitemapData(blogs.contents, categories.contents)

  return {
    props: {
      sitemap,
    },
  }
}
