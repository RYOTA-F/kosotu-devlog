import type { IBlog, ITableOfContents, IBreadCrumb, ISeo } from '@/types/index'

export interface IGetBlogsParams {
  offset?: number
}

export interface IGetBlogsResponse {
  blogs: IBlog[]
  totalPage: number
}

export type TGetBlogByIdParams = string

export interface IGetBlogByIdResponse {
  blog: IBlog
  tableOfContents: ITableOfContents[]
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseBlog {
  getBlogs: (params?: IGetBlogsParams) => Promise<IGetBlogsResponse>
  getBlogByID: (id: TGetBlogByIdParams) => Promise<IGetBlogByIdResponse>
}
