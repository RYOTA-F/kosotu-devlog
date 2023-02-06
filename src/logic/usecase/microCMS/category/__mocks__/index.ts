import { IGetCategoriesResponse, IGetCategoryByIdResponse } from '../types'
import { categoriesMock } from './categories'

export const getCategoriesMock: IGetCategoriesResponse = {
  categories: categoriesMock,
}

export const getCategoryByIdMock: IGetCategoryByIdResponse = {
  category: categoriesMock[0],
  breadCrumb: {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: null,
  },
  seo: {
    title: '',
    description: '',
    url: '',
    image: '',
  },
}

export * from './categories'
