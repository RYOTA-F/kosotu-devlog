import type { IMicroCmsUsecaseCategory } from './types'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ICategoryApiResponse } from '@/types/microCMS/category'
/* Utils */
import { getBreadCrumbDataFromCategory } from './utils/getBreadCrumb'
import { getSeoFromCategory } from '@/utils/index'

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
    const queries = {
      ids: params.id,
      offset: params?.offset ? params?.offset : 0,
    }

    // カテゴリIDを指定しデータを取得
    const { contents } = await client.get<ICategoryApiResponse>({
      endpoint: API.CATEGORY.END_POINT,
      queries,
    })

    // パンくず情報を取得
    const breadCrumb = getBreadCrumbDataFromCategory(contents[0])

    // SEO情報を取得
    const seo = getSeoFromCategory(contents[0])

    return {
      category: contents[0],
      breadCrumb,
      seo,
    }
  }
}
