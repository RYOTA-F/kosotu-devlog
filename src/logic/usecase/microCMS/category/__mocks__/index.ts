import { IGetCategoriesResponse, IGetCategoryByIdResponse } from '../types'
import { categoriesMock } from './categories'
import { IBreadCrumb, IGlobalMenu } from '@/types/index'
import {
  breadCrumbStateMock,
  seoStateMock,
} from '@/stores/__mocks__/common/mock'

export const getCategoriesMock: IGetCategoriesResponse = {
  categories: categoriesMock,
}

export const getCategoryByIdMock: IGetCategoryByIdResponse = {
  category: categoriesMock[0],
  blogs: [],
  totalPage: 2,
  breadCrumb: breadCrumbStateMock as IBreadCrumb,
  seo: seoStateMock,
}

export const getGlobalMenuMock: IGlobalMenu[] = [
  {
    label: 'フロントエンド',
    url: 'category/front-end',
    children: [],
  },
]

export * from './categories'
