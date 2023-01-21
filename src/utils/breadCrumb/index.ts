/* Types */
import { IBlog, IBreadCrumb, ICategory } from '@/types/index'
/* Utils */
import { getCategoryRelation, getCategoryParentName } from '../blogCategory'

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

/**
 * 固定ページ
 */
export const getBreadCrumbDataFromFixed = (title: string) => {
  const breadCrumb: IBreadCrumb = {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: title,
  }

  return breadCrumb
}
