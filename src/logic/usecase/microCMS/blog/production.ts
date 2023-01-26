import type { IMicroCmsUsecaseBlog } from '.'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client, perseBlogBody } from '@/libs/index'
/* Types */
import type { IBlogDetailApiResponse } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromBlog } from './utils/getBreadCrumb'
import { getSeoFromBlog } from './utils/getSeo'

export class MicroCmsUsecaseBlogProd implements IMicroCmsUsecaseBlog {
  getBlogByID: IMicroCmsUsecaseBlog['getBlogByID'] = async (id) => {
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

    const blog = {
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
        : undefined,
      revisedAt: contents[0].revisedAt,
      categories: contents[0].categories,
      tags: contents[0].tags,
    }

    return { blog, tableOfContents, breadCrumb, seo }
  }
}
