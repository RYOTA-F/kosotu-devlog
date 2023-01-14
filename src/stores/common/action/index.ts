import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'
import { IPaginationState } from '../state'

const COMMON_ACTION_TYPES = {
  UPDATE_BREAD_CRUMB: 'UPDATE_BREAD_CRUMB',
  UPDATE_TABLE_OF_CONTENTS: 'UPDATE_TABLE_OF_CONTENTS',
  UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
  UPDATE_TOTAL_PAGE: 'UPDATE_TOTAL_PAGE',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',
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

/* ページネーション更新 */
type IUpdatePagination = {
  type: TCommonActionTypesConst['UPDATE_PAGINATION']
  payload: IPaginationState
}

/* 現在のページ数更新 */
type TUpdateCurrentPage = {
  type: TCommonActionTypesConst['UPDATE_CURRENT_PAGE']
  payload: number
}

/* 合計のページ数更新 */
type TUpdateTotalPage = {
  type: TCommonActionTypesConst['UPDATE_TOTAL_PAGE']
  payload: number
}

type TCommonActions =
  | TUpdateBreadCrumbAction
  | TUpdateTableOfContentsAction
  | IUpdatePagination
  | TUpdateCurrentPage
  | TUpdateTotalPage

export { COMMON_ACTION_TYPES, type TCommonActions, type TCommonActionTypes }
