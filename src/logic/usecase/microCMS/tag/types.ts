import type { ITag, IBreadCrumb, ISeo } from '@/types/index'

export interface IGetTagsResponse {
  tags: ITag[]
}

export interface IGetTagByIdParams {
  id: string
  offset?: number
}

export interface IGetTagByIdResponse {
  tag: ITag
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseTag {
  getTags: () => Promise<IGetTagsResponse>
  getTagById: (params: IGetTagByIdParams) => Promise<IGetTagByIdResponse>
}
