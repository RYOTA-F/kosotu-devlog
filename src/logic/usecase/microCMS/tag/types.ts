import type { IBlog, ITag, IBreadCrumb, ISeo } from '@/types/index'

export interface IGetTagsResponse {
  tags: ITag[]
}

export interface IGetTagByIdParams {
  id: string
  offset?: number
}

export interface IGetTagByIdResponse {
  tag: ITag
  blogs: IBlog[]
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseTag {
  getTags: () => Promise<IGetTagsResponse>
  getTagById: (params: IGetTagByIdParams) => Promise<IGetTagByIdResponse>
}
