import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'

const COMMON_ACTION_TYPES = {
  UPDATE_BREAD_CRUMB: 'UPDATE_BREAD_CRUMB',
  UPDATE_TABLE_OF_CONTENTS: 'UPDATE_TABLE_OF_CONTENTS',
  UPDATE_PAGE_NUMBER: 'UPDATE_PAGE_NUMBER',
} as const

type TCommonActionTypesConst = typeof COMMON_ACTION_TYPES
type TCommonActionTypes =
  TCommonActionTypesConst[keyof typeof COMMON_ACTION_TYPES]

/* パンくず更新 */
type TUpdateBreadCrumbAction = {
  type: TCommonActionTypesConst['UPDATE_BREAD_CRUMB']
  payload: IBreadCrumb | undefined
}

/* 目次更新 */
type TUpdateTableOfContentsAction = {
  type: TCommonActionTypesConst['UPDATE_TABLE_OF_CONTENTS']
  payload: ITableOfContents[]
}

/* ページ数更新 */
type TUpdatePageNumber = {
  type: TCommonActionTypesConst['UPDATE_PAGE_NUMBER']
  payload: number
}

type TCommonActions =
  | TUpdateBreadCrumbAction
  | TUpdateTableOfContentsAction
  | TUpdatePageNumber

export { COMMON_ACTION_TYPES, type TCommonActions, type TCommonActionTypes }
