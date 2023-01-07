import { IBreadCrumb, ITableOfContents } from '@/types/microCMS/blog'

export interface ICommonState {
  breadClumb?: IBreadCrumb
  tableOfContents: ITableOfContents[]
}
