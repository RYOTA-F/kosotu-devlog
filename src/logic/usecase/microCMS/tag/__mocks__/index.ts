import { IGetTagsResponse, IGetTagByIdResponse } from '../types'
import { tagsMock } from './tags'
import { IBreadCrumb } from '@/types/index'
import {
  breadCrumbStateMock,
  seoStateMock,
} from '@/stores/__mocks__/common/mock'

export const getTagsMock: IGetTagsResponse = {
  tags: tagsMock,
}

export const getTagByIdMock: IGetTagByIdResponse = {
  tag: tagsMock[0],
  breadCrumb: breadCrumbStateMock as IBreadCrumb,
  seo: seoStateMock,
}

export * from './tags'
