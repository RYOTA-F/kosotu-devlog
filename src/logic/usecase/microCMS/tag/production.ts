import type { IMicroCmsUsecaseTag } from './types'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ITagApiResponse } from '@/types/microCMS/tag'
/* Utils */
import { getBreadCrumbDataFromTag } from './utils/getBreadCrumb'
import { getSeoFromTag } from './utils/getSeo'

export class MicroCmsUsecaseTagProd implements IMicroCmsUsecaseTag {
  getTagById: IMicroCmsUsecaseTag['getTagById'] = async (params) => {
    // タグ情報を取得
    const { contents } = await client.get<ITagApiResponse>({
      endpoint: API.TAG.END_POINT,
      queries: { ids: params.id },
    })

    // SEO情報を取得
    const seo = getSeoFromTag(contents[0])

    // パンくず情報を取得
    const breadCrumb = getBreadCrumbDataFromTag(contents[0].name)

    return {
      tag: contents[0],
      breadCrumb,
      seo,
    }
  }
}
