import { IBreadCrumb } from '@/types/microCMS/blog'

const COMMON_ACTION_TYPES = {
  UPDATE_BREAD_CRUMB: 'UPDATE_BREAD_CRUMB',
} as const

type TCommonActionTypesConst = typeof COMMON_ACTION_TYPES
type TCommonActionTypes =
  TCommonActionTypesConst[keyof typeof COMMON_ACTION_TYPES]

type TUpdateBreadCrumbAction = {
  type: TCommonActionTypesConst['UPDATE_BREAD_CRUMB']
  payload: IBreadCrumb | undefined
}

type TCommonActions = TUpdateBreadCrumbAction

export { COMMON_ACTION_TYPES, type TCommonActions, type TCommonActionTypes }
