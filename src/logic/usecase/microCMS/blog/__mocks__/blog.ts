import { IBlog } from '@/types/index'

export const blogBodyMock: IBlog['body'] = `
  <div style="margin-top: 60px; text-align: center;">
    ========================================<br>
          ↓↓↓↓↓↓   BlogBody   ↓↓↓↓↓↓<br>
    ========================================<br>
  </div>
`

export const blogCategoryMock: IBlog['categories'] = [
  {
    id: 'golang',
    createdAt: '2022-12-18T07:55:03.812Z',
    updatedAt: '2022-12-18T07:55:27.650Z',
    publishedAt: '2022-12-18T07:55:03.812Z',
    revisedAt: '2022-12-18T07:55:03.812Z',
    name: 'Golang',
    relation: {
      fieldId: '',
      isParent: false,
      children: [],
      parent: [],
    },
    blogs: [],
  },
]

export const blogTagMock: IBlog['tags'] = [
  {
    id: 'library',
    createdAt: '2023-01-03T16:18:50.018Z',
    updatedAt: '2023-01-03T16:18:50.018Z',
    publishedAt: '2023-01-03T16:18:50.018Z',
    revisedAt: '2023-01-03T16:18:50.018Z',
    name: 'ライブラリ',
    blogs: [],
  },
]

export const blogDateTimeMock = {
  createdAt: '2022-12-18T07:54:41.636Z',
  updatedAt: '2022-12-18T07:55:15.331Z',
  publishedAt: '2022-12-18T07:54:41.636Z',
  revisedAt: '2022-12-18T07:55:15.331Z',
}
