import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'

export interface ICommonState {
  globalMenu: IGlobalMenu[]
  breadClumb?: IBreadCrumb
  tableOfContents: ITableOfContents[]
  pagination: IPaginationState
  seo: ISeoState
  isViewSidenav: boolean
}

export interface IMenu {
  label: string
  url: string
}

export interface IGlobalMenu {
  label: string
  url: string
  children: IMenu[]
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
