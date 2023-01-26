import { IGetTagsResponse, IGetTagByIdResponse } from '../types'

export const getTagsMock: IGetTagsResponse = {
  tags: [],
}

export const getTagByIdMock: IGetTagByIdResponse = {
  tag: {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    name: '',
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
