import type { IBlog, ITableOfContents, IBreadCrumb, ISeo } from '@/types/index'

export type TGetBlogByIdParams = string

export interface IGetBlogByIdResponse {
  blog: IBlog
  tableOfContents: ITableOfContents[]
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseBlog {
  getBlogByID: (id: TGetBlogByIdParams) => Promise<IGetBlogByIdResponse>
}
