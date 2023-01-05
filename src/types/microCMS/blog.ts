import { ICategory } from './category'
import { ITag } from './tag'

export interface IBlog {
  id: string
  title: string
  description: string
  body: string
  image: IBlogImage
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  categories: ICategory[]
  tags: ITag[]
  oldPublishedAt?: string
  tableOfContents: ITableOfContents[]
  breadCrumb: IBlogBreadCrumb
}

export type TBlogDetailApiResponseContents = Omit<
  IBlog,
  'tableOfContents' | 'breadCrumb'
>

export interface IBlogsApiResponse {
  contents: TBlogDetailApiResponseContents[]
  totalCount: number
  offset: number
  limit: number
}

export interface IBlogDetailApiResponse {
  contents: TBlogDetailApiResponseContents[]
}

export interface IBlogCardData {
  url: string
  title: string
  description: string
  image: string
  site: string
}

export interface ITableOfContents {
  id: string
  text: string
  type: string
}

export interface IBlogBreadCrumb {
  categoryParentId: string | null
  categoryParentName: string | null
  categoryChildId: string
  categoryChildName: string
  blogTitle: string
}

export interface IBlogImage {
  url: string
  height: number
  width: number
}

export type IBlogCard = Pick<IBlog, 'title' | 'image' | 'publishedAt'> & {
  url: string
}
