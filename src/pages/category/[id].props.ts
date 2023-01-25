import type { GetStaticProps } from 'next'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ICategoryApiResponse } from '@/types/microCMS/category'
/* Utils */
import {
  getBreadCrumbDataFromCategory,
  getSeoFromCategory,
} from '@/utils/index'

/**
 * 静的ページ用のカテゴリ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // カテゴリIDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // カテゴリIDを指定しデータを取得
  const { contents } = await client.get<ICategoryApiResponse>({
    endpoint: API.CATEGORY.END_POINT,
    queries: { ids: id },
  })

  // パンくず情報を取得
  const breadCrumb = getBreadCrumbDataFromCategory(contents[0])

  // SEO情報を取得
  const seo = getSeoFromCategory(contents[0])

  return {
    props: {
      category: contents[0],
      breadCrumb,
      seo,
    },
  }
}
