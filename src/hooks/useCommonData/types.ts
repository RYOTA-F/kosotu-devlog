import { IBreadCrumb, ITableOfContents } from '@/types/index'
import { IPaginationState, TPaginationType } from '@/stores/common'

export interface IUseCommonData {
  breadCrumb?: IBreadCrumb
  setBreadCrumb: (breadCrumb: IBreadCrumb) => void
  resetBreadCrumb: () => void
  tableOfContents: ITableOfContents[]
  setTableOfContents: (tableOfContents: ITableOfContents[]) => void
  resetTableOfContents: () => void
  currentPage: number
  totalPage: number
  paginationType: TPaginationType
  setPagination: (pagination: IPaginationState) => void
  resetPagination: () => void
}
