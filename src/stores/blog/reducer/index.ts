import { Reducer } from 'react'
import { TBlogActions, BLOG_ACTION_TYPES } from '../action'
import { IBlogState } from '../state'

export const blogReducer: Reducer<IBlogState, TBlogActions> = (
  state,
  action
) => {
  switch (action.type) {
    // ブログ 一覧更新
    case BLOG_ACTION_TYPES.UPDATE_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      }
    // ブログ 投稿数更新
    case BLOG_ACTION_TYPES.UPDATE_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      }
    // 目次 更新
    case BLOG_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS:
      return {
        ...state,
        tableOfContents: action.payload,
      }
    default:
      return state
  }
}
