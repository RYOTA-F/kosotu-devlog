import { IGetCategoriesResponse, IGetCategoryByIdResponse } from '../types'
import { categoriesMock } from './categories'
import { IBreadCrumb } from '@/types/index'
import {
  breadCrumbStateMock,
  seoStateMock,
} from '@/stores/__mocks__/common/mock'

export const getCategoriesMock: IGetCategoriesResponse = {
  categories: categoriesMock,
}

export const getCategoryByIdMock: IGetCategoryByIdResponse = {
  category: categoriesMock[0],
  breadCrumb: breadCrumbStateMock as IBreadCrumb,
  seo: seoStateMock,
}

export * from './categories'
