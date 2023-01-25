import type { GetStaticProps } from 'next'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ITagApiResponse } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromTag } from '@/utils/index'

/**
 * 静的ページ用のタグ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // タグIDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // タグIDを指定しデータを取得
  const { contents } = await client.get<ITagApiResponse>({
    endpoint: API.TAG.END_POINT,
    queries: { ids: id },
  })

  // パンくず情報を取得
  const breadCrumb = getBreadCrumbDataFromFixed(contents[0].name)
  // SEO情報を取得
  const seo = getSeoFromTag(contents[0])

  return {
    props: {
      tag: contents[0],
      breadCrumb,
      seo,
    },
  }
}
