import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'

export interface ICommonState {
  breadClumb?: IBreadCrumb
  tableOfContents: ITableOfContents[]
  pagination: IPaginationState
}

export interface IPaginationState {
  currentPage: number
  totalPage: number
  type: TPaginationType
}

export type TPaginationType = 'blog' | 'category' | 'tag'
