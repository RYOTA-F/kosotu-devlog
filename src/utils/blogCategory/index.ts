/* Const */
import { CATEGORY_PARENT, CATEGORY_PARENT_LIST } from '@/const/index'
/* Types */
import { ICategoryRelation } from '@/types/microCMS/category'

/**
 * カテゴリの関係性を取得
 */
export const getCategoryRelation = (
  relation: ICategoryRelation,
  isParent: boolean
) => {
  const categoryParent =
    !isParent && relation.parent ? relation.parent[0] : null
  const categoryChildren =
    isParent && relation.children ? relation.children[0] : null

  return { isParent, categoryParent, categoryChildren }
}

/**
 * 親カテゴリ名を取得
 */
export const getCategoryParentName = (id: string) => {
  type TConvertList = { ID: string; NAME: string }
  const convertList = CATEGORY_PARENT_LIST.map<TConvertList>((v) => v)
  const target = convertList.filter((v) => v.ID === id)

  return target.length ? target[0].NAME : CATEGORY_PARENT.OTHERS.NAME
}
