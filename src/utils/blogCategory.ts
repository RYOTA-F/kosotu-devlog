/* Const */
import { CATEGORY_PARENT, CATEGORY_PARENT_LIST } from '@/const/index'

/**
 * 親カテゴリIDを取得
 */
export const getCategoryParentId = (name: string) => {
  const target = CATEGORY_PARENT_LIST.filter((v) => v.NAME === name)

  return target.length ? target[0].ID : CATEGORY_PARENT.OTHERS.ID
}
