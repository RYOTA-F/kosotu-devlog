/* Types */
import { IBlog, IBreadCrumb } from '@/types/index'
/* Utils */
import { getCategoryRelation, getCategoryParentName } from '../blogCategory'

/**
 * パンくず情報を取得
 */
export const getBreadCrumbData = (contents: IBlog) => {
  const { categoryParent } = getCategoryRelation(
    contents.categories[0].relation,
    contents.categories[0].relation.isParent
  )

  const breadCrumb: IBreadCrumb = {
    categoryParentId: categoryParent ? categoryParent.id : null,
    categoryParentName: categoryParent
      ? getCategoryParentName(categoryParent.id)
      : null,
    categoryChildId: contents.categories[0].id,
    categoryChildName: contents.categories[0].name,
    blogTitle: contents.title,
  }

  return breadCrumb
}
