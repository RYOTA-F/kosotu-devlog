import { ICategory } from '@/types/index'

const CATEGORY_ACTION_TYPES = {
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
} as const

type TCategoryActionTypesConst = typeof CATEGORY_ACTION_TYPES
type TCategoryActionTypes =
  TCategoryActionTypesConst[keyof typeof CATEGORY_ACTION_TYPES]

/* カテゴリ更新 */
type TUpdateCategoryAction = {
  type: TCategoryActionTypesConst['UPDATE_CATEGORY']
  payload: ICategory
}

type TCategoryActions = TUpdateCategoryAction

export {
  CATEGORY_ACTION_TYPES,
  type TCategoryActions,
  type TCategoryActionTypes,
}
