import type { ICategory, IBreadCrumb, ISeo } from '@/types/index'

export interface IGetCategoryByIdParams {
  id: string
  offset?: number
}

export interface IGetCategoryByIdResponse {
  category: ICategory
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseCategory {
  getCategoryById: (
    params: IGetCategoryByIdParams
  ) => Promise<IGetCategoryByIdResponse>
}
