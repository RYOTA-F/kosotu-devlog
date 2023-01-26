import { IGetCategoryByIdResponse } from '../types'

export const getCategoryByIdMock: IGetCategoryByIdResponse = {
  category: {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    name: '',
    relation: {
      fieldId: '',
      isParent: false,
      children: [],
      parent: [],
    },
    blogs: [],
  },
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
