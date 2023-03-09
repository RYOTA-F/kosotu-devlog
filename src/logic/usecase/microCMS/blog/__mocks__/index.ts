import type { IGetBlogsResponse, IGetBlogByIdResponse } from '../index'
import { IBreadCrumb } from '@/types/index'
import {
  breadCrumbStateMock,
  seoStateMock,
} from '@/stores/__mocks__/common/mock'
import { blogsMock } from './blogs'

export const getBlogsMock: IGetBlogsResponse = {
  blogs: blogsMock,
  totalPage: 3,
}

export const getBlogByIdMock: IGetBlogByIdResponse = {
  blog: blogsMock[0],
  tableOfContents: [],
  breadCrumb: breadCrumbStateMock as IBreadCrumb,
  seo: seoStateMock,
}

export * from './blogs'
