import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'

export interface ICommonState {
  breadClumb?: IBreadCrumb
  tableOfContents: ITableOfContents[]
  pagination: IPaginationState
  seo: ISeoState
}

export interface ISeoState {
  title: string
  description: string
  url: string
  image: string
}

export interface IPaginationState {
  currentPage: number
  totalPage: number
  type: TPaginationType
}

export type TPaginationType = 'blog' | 'category' | 'tag'
