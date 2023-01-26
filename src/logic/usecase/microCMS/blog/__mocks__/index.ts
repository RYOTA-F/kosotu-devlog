import type { IGetBlogsResponse, IGetBlogByIdResponse } from '../index'

export const getBlogsMock: IGetBlogsResponse = {
  blogs: [],
  totalPage: 2,
}

export const getBlogByIdMock: IGetBlogByIdResponse = {
  blog: {
    id: '',
    title: '',
    description: '',
    body: '',
    image: {
      url: '',
      height: 100,
      width: 100,
    },
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    oldPublishedAt: '',
    revisedAt: '',
    categories: [],
    tags: [],
  },
  tableOfContents: [],
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
