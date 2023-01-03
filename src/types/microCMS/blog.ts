export interface IBlogsApiResponse {
  contents: IBlog[]
  totalCount: number
  offset: number
  limit: number
}

export type TBlogDetailApiResponseContents = Omit<
  IBlog,
  'tableOfContents' | 'breadCrumb'
>

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

export interface IBlogTableOfContents {
  id: string
  text: string
  type: string
}

export interface IBlogBreadCrumb {
  categoryParentId: string
  categoryParentName: string
  categoryChildId: string
  categoryChildName: string
  blogTitle: string
}

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
  categories: IBlogCaterory[]
  oldPublishedAt?: string
  tableOfContents: IBlogTableOfContents[]
  breadCrumb: IBlogBreadCrumb
}

export interface IBlogImage {
  url: string
  height: number
  width: number
}

export interface IBlogCaterory {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  parent: string[]
  posts: {
    id: string
  }[]
}

export type IBlogCard = Pick<IBlog, 'title' | 'image' | 'publishedAt'> & {
  url: string
}
