/* Const */
import { PAGE, SITE } from '@/const/index'
/* Store */
import { initialCommonState } from '@/stores/common'
/* Types */
import { ITag } from '@/types/index'

/**
 * SEO情報を取得: タグ
 */
export const getSeoFromTag = (tag: ITag) => {
  return {
    title: `${tag.name} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.TAG}${tag.id}`,
    image: initialCommonState.seo.image,
  }
}
