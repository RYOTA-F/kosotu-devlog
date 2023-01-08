import { Reducer } from 'react'
import { TCategoryActions, CATEGORY_ACTION_TYPES } from '../action'
import { ICategoryState } from '../state'

export const categoryReducer: Reducer<ICategoryState, TCategoryActions> = (
  state,
  action
) => {
  switch (action.type) {
    // カテゴリ更新
    case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state
  }
}
