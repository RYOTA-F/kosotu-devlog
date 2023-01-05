import { Reducer } from 'react'
import { ICommonState } from '../state'
import { TCommonActions, COMMON_ACTION_TYPES } from '../action'

export const commonReducer: Reducer<ICommonState, TCommonActions> = (
  state,
  action
) => {
  switch (action.type) {
    // パンくず 更新
    case COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB:
      return {
        ...state,
        breadClumb: action.payload,
      }
    default:
      return state
  }
}
