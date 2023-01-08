import { ICategoryState } from './types'

export const initialCategoryState: ICategoryState = {
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
}

export * from './types'
