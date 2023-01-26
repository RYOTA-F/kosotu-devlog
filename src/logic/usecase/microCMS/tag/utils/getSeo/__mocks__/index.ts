import { SITE, PAGE } from '@/const/index'
import { ITag } from '@/types/index'
import { initialCommonState } from '@/stores/common'

export const tagDataMock: ITag = {
  id: 'developers-guild',
  createdAt: '2022-12-18T07:54:41.636Z',
  updatedAt: '2022-12-18T07:54:41.636Z',
  publishedAt: '2022-12-18T07:54:41.636Z',
  revisedAt: '2022-12-18T07:54:41.636Z',
  name: 'Developers Guild',
  blogs: [],
}

export const tagResultMock = {
  title: `${tagDataMock.name} - ${SITE.TITLE}`,
  description: initialCommonState.seo.description,
  url: `${SITE.URL}${PAGE.TAG}${tagDataMock.id}`,
  image: initialCommonState.seo.image,
}
