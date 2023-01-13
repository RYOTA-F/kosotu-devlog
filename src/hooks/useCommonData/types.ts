import { IBreadCrumb, ITableOfContents } from '@/types/index'

export interface IUseCommonData {
  breadCrumb?: IBreadCrumb
  setBreadCrumb: (breadCrumb: IBreadCrumb) => void
  resetBreadCrumb: () => void
  tableOfContents: ITableOfContents[]
  setTableOfContents: (tableOfContents: ITableOfContents[]) => void
  resetTableOfContents: () => void
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  totalPage: number
  setTotalPage: (totalPage: number) => void
  resetPagination: () => void
}
