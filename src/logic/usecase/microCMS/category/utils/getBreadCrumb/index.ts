/* Types */
import { IBreadCrumb, ICategory } from '@/types/index'

/**
 * カテゴリ: パンくず情報を取得
 */
export const getBreadCrumbDataFromCategory = (contents: ICategory) => {
  const parentId = contents.relation.isParent
    ? null
    : contents.relation.parent[0].id
  const parentName = contents.relation.isParent
    ? null
    : contents.relation.parent[0].name

  const breadCrumb: IBreadCrumb = {
    categoryParentId: parentId,
    categoryParentName: parentName,
    categoryChildId: null,
    categoryChildName: null,
    currentName: contents.name,
  }

  return breadCrumb
}
