import { TBlogDetailApiResponseContents } from './blog'

export interface ICategory {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  relation: ICategoryRelation
  blogs: TBlogDetailApiResponseContents[]
}

export interface ICategoryRelation {
  fieldId: string
  isParent: boolean
  children: ICategory[]
  parent: ICategory[]
}

export type TCategoryDetailApiResponseContents = Omit<ICategory, ''>

export interface ICategoryApiResponse {
  contents: TCategoryDetailApiResponseContents[]
  totalCount: number
  offset: number
  limit: number
}
