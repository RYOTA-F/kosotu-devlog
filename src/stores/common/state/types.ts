import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'
import { IGlobalMenu } from '@/types/index'

export interface ICommonState {
  globalMenu: IGlobalMenu[]
  breadClumb?: IBreadCrumb
  tableOfContents: ITableOfContents[]
  pagination: IPaginationState
  seo: ISeoState
  isViewSidenav: boolean
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
}
