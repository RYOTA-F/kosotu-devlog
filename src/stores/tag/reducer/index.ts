import { Reducer } from 'react'
import { TTagActions, TAG_ACTION_TYPES } from '../action'
import { ITagState } from '../state'

export const tagReducer: Reducer<ITagState, TTagActions> = (state, action) => {
  switch (action.type) {
    // タグ更新
    case TAG_ACTION_TYPES.UPDATE_TAG:
      return {
        ...state,
        tag: action.payload,
      }
    default:
      return state
  }
}
