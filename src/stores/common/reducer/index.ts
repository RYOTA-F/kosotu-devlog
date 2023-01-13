import { Reducer } from 'react'
import { ICommonState } from '../state'
import { TCommonActions, COMMON_ACTION_TYPES } from '../action'

export const commonReducer: Reducer<ICommonState, TCommonActions> = (
  state,
  action
) => {
  switch (action.type) {
    // パンくず更新
    case COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB:
      return {
        ...state,
        breadClumb: action.payload,
      }
    // 目次更新
    case COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS:
      return {
        ...state,
        tableOfContents: action.payload,
      }
    // 現在のページ数更新
    case COMMON_ACTION_TYPES.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        pagination: {
          currentPage: action.payload,
          totalPage: state.pagination.totalPage,
        },
      }
    // 合計のページ数更新
    case COMMON_ACTION_TYPES.UPDATE_TOTAL_PAGE:
      return {
        ...state,
        pagination: {
          currentPage: state.pagination.currentPage,
          totalPage: action.payload,
        },
      }
    default:
      return state
  }
}
