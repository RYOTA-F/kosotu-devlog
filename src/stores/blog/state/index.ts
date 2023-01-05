import { IBlogState } from './types'

export const initialBlogState: IBlogState = {
  blogs: [],
  totalCount: undefined,
  offset: undefined,
  limit: undefined,
  tableOfContents: [],
}

export * from './types'
