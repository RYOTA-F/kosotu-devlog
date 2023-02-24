import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'
import { IGlobalMenu } from '@/types/index'
import { IPaginationState, ISeoState } from '../state'

const COMMON_ACTION_TYPES = {
  UPDATE_GLOBAL_MENU: 'UPDATE_GLOBAL_MENU',
  UPDATE_BREAD_CRUMB: 'UPDATE_BREAD_CRUMB',
  UPDATE_TABLE_OF_CONTENTS: 'UPDATE_TABLE_OF_CONTENTS',
  UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
  UPDATE_TOTAL_PAGE: 'UPDATE_TOTAL_PAGE',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',
  UPDATE_SEO: 'UPDATE_SEO',
  UPDATE_IS_VIEW_SIDENAV: 'UPDATE_IS_VIEW_SIDENAV',
} as const

type TCommonActionTypesConst = typeof COMMON_ACTION_TYPES
type TCommonActionTypes =
  TCommonActionTypesConst[keyof typeof COMMON_ACTION_TYPES]

/* グローバルメニュー更新 */
type TUpdateGlobalMenuAction = {
  type: TCommonActionTypesConst['UPDATE_GLOBAL_MENU']
  payload: IGlobalMenu[]
}

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

/* SEO更新 */
type IUpdateSeo = {
  type: TCommonActionTypesConst['UPDATE_SEO']
  payload: ISeoState
}

/* SEO更新 */
type IUpdateIsViewSidenav = {
  type: TCommonActionTypesConst['UPDATE_IS_VIEW_SIDENAV']
  payload: boolean
}

type TCommonActions =
  | TUpdateGlobalMenuAction
  | TUpdateBreadCrumbAction
  | TUpdateTableOfContentsAction
  | IUpdatePagination
  | IUpdateSeo
  | IUpdateIsViewSidenav

export { COMMON_ACTION_TYPES, type TCommonActions, type TCommonActionTypes }
