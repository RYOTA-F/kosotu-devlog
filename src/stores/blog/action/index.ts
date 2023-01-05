import { IBlog, ITableOfContents } from '@/types/microCMS/blog'

const BLOG_ACTION_TYPES = {
  UPDATE_BLOGS: 'UPDATE_BLOGS',
  UPDATE_TOTAL_COUNT: 'UPDATE_TOTAL_COUNT',
  UPDATE_TABLE_OF_CONTENTS: 'UPDATE_TABLE_OF_CONTENTS',
} as const

type TBlogActionTypesConst = typeof BLOG_ACTION_TYPES
type TBlogActionTypes = TBlogActionTypesConst[keyof typeof BLOG_ACTION_TYPES]

/** ブログ一覧更新 */
type TUpdateBlogsAction = {
  type: TBlogActionTypesConst['UPDATE_BLOGS']
  payload: IBlog[]
}

/** ブログ投稿数更新 */
type TUpdateTotalCountAction = {
  type: TBlogActionTypesConst['UPDATE_TOTAL_COUNT']
  payload: number
}

/** 目次更新 */
type TUpdateTableOfContentsAction = {
  type: TBlogActionTypesConst['UPDATE_TABLE_OF_CONTENTS']
  payload: ITableOfContents[]
}

type TBlogActions =
  | TUpdateBlogsAction
  | TUpdateTotalCountAction
  | TUpdateTableOfContentsAction

export { BLOG_ACTION_TYPES, type TBlogActions, type TBlogActionTypes }
