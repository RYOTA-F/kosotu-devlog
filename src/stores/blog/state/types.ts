import { IBlog, ITableOfContents, IBreadCrumb } from '@/types/microCMS/blog'

export interface IBlogState {
  blogs: IBlog[]
  totalCount?: number
  offset?: number
  limit?: number
  tableOfContents: ITableOfContents[]
  breadClumb?: IBreadCrumb
}
