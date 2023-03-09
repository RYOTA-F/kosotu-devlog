import { IBlog } from './blog'

export interface ICategory {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  relation: ICategoryRelation
  blogs: IBlog[]
}

export interface ICategoryRelation {
  fieldId: string
  isParent: boolean
  children: ICategory[]
  parent: ICategory[]
}

export interface ICategoryApiResponse {
  contents: ICategory[]
  totalCount: number
  offset: number
  limit: number
}
