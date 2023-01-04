import { TBlogDetailApiResponseContents } from './blog'

export interface ITag {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  blogs: TBlogDetailApiResponseContents[]
}

export interface ITagApiResponse {
  contents: ITag[]
  totalCount: number
  offset: number
  limit: number
}
