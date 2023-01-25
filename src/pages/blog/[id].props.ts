import type { GetStaticProps } from 'next'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client, perseBlogBody } from '@/libs/index'
/* Types */
import { IBlogDetailApiResponse } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromBlog, getSeoFromBlog } from '@/utils/index'

/**
 * 静的ページ用の投稿情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // 投稿IDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // 投稿IDを指定しデータを取得
  const { contents } = await client.get<IBlogDetailApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: { ids: id },
  })

  // 投稿本文をパース
  const { body, tableOfContents } = await perseBlogBody(contents[0].body)
  // パンくず情報を取得
  const breadCrumb = getBreadCrumbDataFromBlog(contents[0])
  // SEO情報を取得
  const seo = getSeoFromBlog(contents[0])

  return {
    props: {
      blog: {
        id: contents[0].id,
        title: contents[0].title,
        description: contents[0].description,
        body,
        image: contents[0].image,
        createdAt: contents[0].createdAt,
        updatedAt: contents[0].updatedAt,
        publishedAt: contents[0].publishedAt,
        oldPublishedAt: contents[0].oldPublishedAt
          ? contents[0].oldPublishedAt
          : null,
        revisedAt: contents[0].revisedAt,
        categories: contents[0].categories,
        tags: contents[0].tags,
      },
      tableOfContents,
      breadCrumb,
      seo,
    },
  }
}
