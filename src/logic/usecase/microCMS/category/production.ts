import type { IMicroCmsUsecaseCategory } from './types'
/* Const */
import { API, MAX_BLOG_COUNT } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { IBlogsApiResponse } from '@/types/microCMS/blog'
import { ICategoryApiResponse } from '@/types/microCMS/category'
/* Utils */
import { getBreadCrumbDataFromCategory } from './utils/getBreadCrumb'
import { getSeoFromCategory } from './utils/getSeo'
import { getGlobalMenu } from './utils/getGlobalMenu'
import { getTotalPage } from '@/utils/index'

export class MicroCmsUsecaseCategoryProd implements IMicroCmsUsecaseCategory {
  getCategories: IMicroCmsUsecaseCategory['getCategories'] = async () => {
    const categories = await client.get<ICategoryApiResponse>({
      endpoint: API.CATEGORY.END_POINT,
      // デフォルトで limitが10件 になるのを解除
      queries: { limit: 9999 },
    })

    return {
      categories: categories.contents,
    }
  }

  getCategoryById: IMicroCmsUsecaseCategory['getCategoryById'] = async (
    params
  ) => {
    const categoryQueries = {
      ids: params.id,
    }

    const blogQueries = {
      filters: `categories[contains]${params.id}`,
      limit: params?.limit ? MAX_BLOG_COUNT : 9999,
      offset: params?.offset ? params?.offset : 0,
    }

    // カテゴリ情報を取得
    const { contents } = await client.get<ICategoryApiResponse>({
      endpoint: API.CATEGORY.END_POINT,
      queries: categoryQueries,
    })

    // 投稿一覧を取得
    const blogs = await client.get<IBlogsApiResponse>({
      endpoint: API.BLOG.END_POINT,
      queries: blogQueries,
    })

    // ページ数の合計を取得
    const totalPage = getTotalPage(blogs.totalCount)

    // パンくず情報を取得
    const breadCrumb = getBreadCrumbDataFromCategory(contents[0])

    // SEO情報を取得
    const seo = getSeoFromCategory(contents[0])

    return {
      category: contents[0],
      blogs: blogs.contents,
      totalPage,
      breadCrumb,
      seo,
    }
  }

  getGlobalMenu: IMicroCmsUsecaseCategory['getGlobalMenu'] = async () => {
    const categories = await client.get<ICategoryApiResponse>({
      endpoint: API.CATEGORY.END_POINT,
      // デフォルトで limitが10件 になるのを解除
      queries: { limit: 9999 },
    })

    return getGlobalMenu(categories.contents)
  }
}
