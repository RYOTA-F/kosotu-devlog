import type { ICategory, IBreadCrumb, ISeo } from '@/types/index'

export interface IGetCategoriesResponse {
  categories: ICategory[]
}
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
  getCategories: () => Promise<IGetCategoriesResponse>
  getCategoryById: (
    params: IGetCategoryByIdParams
  ) => Promise<IGetCategoryByIdResponse>
}
