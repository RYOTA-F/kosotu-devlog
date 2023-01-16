import { Reducer } from 'react'
import { ISitemapActions, SITEMAP_ACTION_TYPES } from '../action'
import { ISitemapState } from '../state'

export const sitemapReducer: Reducer<ISitemapState, ISitemapActions> = (
  state,
  action
) => {
  switch (action.type) {
    // サイトマップ更新
    case SITEMAP_ACTION_TYPES.UPDATE_SITEMAP:
      return {
        ...state,
        sitemap: action.payload,
      }
    default:
      return state
  }
}
