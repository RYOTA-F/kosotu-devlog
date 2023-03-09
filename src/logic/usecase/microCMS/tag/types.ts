import type { IBlog, ITag, IBreadCrumb, ISeo } from '@/types/index'

export interface IGetTagsResponse {
  tags: ITag[]
}

export interface IGetTagByIdParams {
  id: string
  limit?: boolean
  offset?: number
}

export interface IGetTagByIdResponse {
  tag: ITag
  blogs: IBlog[]
  totalPage: number
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseTag {
  getTags: () => Promise<IGetTagsResponse>
  getTagById: (params: IGetTagByIdParams) => Promise<IGetTagByIdResponse>
}
