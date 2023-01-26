/* Types */
import { IBlog, IBreadCrumb } from '@/types/index'
/* Utils */
import {
  getCategoryRelation,
  getCategoryParentName,
} from '@/utils/blogCategory'

/**
 * 投稿: パンくず情報を取得
 */
export const getBreadCrumbDataFromBlog = (contents: IBlog) => {
  const { categoryParent } = getCategoryRelation(
    contents.categories[0].relation
  )

  const breadCrumb: IBreadCrumb = {
    categoryParentId: categoryParent ? categoryParent.id : null,
    categoryParentName: categoryParent
      ? getCategoryParentName(categoryParent.id)
      : null,
    categoryChildId: contents.categories[0].id,
    categoryChildName: contents.categories[0].name,
    currentName: contents.title,
  }

  return breadCrumb
}
