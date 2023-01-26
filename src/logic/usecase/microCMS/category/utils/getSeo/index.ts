/* Const */
import { PAGE, SITE } from '@/const/index'
/* Store */
import { initialCommonState } from '@/stores/common'
/* Types */
import { ICategory } from '@/types/index'

/**
 * SEO情報を取得: カテゴリ
 */
export const getSeoFromCategory = (category: ICategory) => {
  return {
    title: `${category.name} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.CATEGORY}${category.id}`,
    image: initialCommonState.seo.image,
  }
}
