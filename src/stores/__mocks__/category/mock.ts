import { ICategory } from '@/types/index'

export const categoryStateMock: ICategory = {
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
    parent: [
      {
        id: 'react',
        createdAt: '2022-12-18T07:54:41.636Z',
        updatedAt: '2022-12-18T07:54:41.636Z',
        publishedAt: '2022-12-18T07:54:41.636Z',
        revisedAt: '2022-12-18T07:54:41.636Z',
        name: 'React',
        relation: {
          fieldId: '',
          isParent: true,
          children: [],
          parent: [],
        },
        blogs: [],
      },
    ],
  },
  blogs: [],
}
