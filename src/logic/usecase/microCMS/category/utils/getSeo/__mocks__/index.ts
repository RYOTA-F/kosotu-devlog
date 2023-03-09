import { SITE, PAGE } from '@/const/index'
import { ICategory } from '@/types/index'
import { initialCommonState } from '@/stores/common'

export const categoryDataMock: ICategory = {
  id: 'react',
  createdAt: '2022-12-18T07:54:41.636Z',
  updatedAt: '2022-12-18T07:54:41.636Z',
  publishedAt: '2022-12-18T07:54:41.636Z',
  revisedAt: '2022-12-18T07:54:41.636Z',
  name: 'React',
  relation: {
    fieldId: 'relation',
    isParent: false,
    children: [],
    parent: [],
  },
  blogs: [],
}

export const categoryResultMock = {
  title: `${categoryDataMock.name} - ${SITE.TITLE}`,
  description: initialCommonState.seo.description,
  url: `${SITE.URL}${PAGE.CATEGORY}${categoryDataMock.id}`,
  image: initialCommonState.seo.image,
}
