import type {
  IBlog,
  ICategory,
  IBreadCrumb,
  ISeo,
  IGlobalMenu,
} from '@/types/index'

export interface IGetCategoriesResponse {
  categories: ICategory[]
}
export interface IGetCategoryByIdParams {
  id: string
  limit?: boolean
  offset?: number
}

export interface IGetCategoryByIdResponse {
  category: ICategory
  blogs: IBlog[]
  totalPage: number
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseCategory {
  getCategories: () => Promise<IGetCategoriesResponse>
  getCategoryById: (
    params: IGetCategoryByIdParams
  ) => Promise<IGetCategoryByIdResponse>
  getGlobalMenu: () => Promise<IGlobalMenu[]>
}
