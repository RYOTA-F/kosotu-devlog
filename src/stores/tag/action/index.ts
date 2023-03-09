import { ITag } from '@/types/index'

const TAG_ACTION_TYPES = {
  UPDATE_TAG: 'UPDATE_TAG',
} as const

type TTagActionTypesConst = typeof TAG_ACTION_TYPES
type TTagActionTypes = TTagActionTypesConst[keyof typeof TAG_ACTION_TYPES]

/* タグ更新 */
type TUpdateTagAction = {
  type: TTagActionTypesConst['UPDATE_TAG']
  payload: ITag
}

type TTagActions = TUpdateTagAction

export { TAG_ACTION_TYPES, type TTagActions, type TTagActionTypes }
