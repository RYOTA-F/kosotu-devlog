import { ICategory } from '@/types/index'

export const categoryRelationChildrenMock: ICategory['relation'] = {
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
}

export const categoryRelationParentMock: ICategory['relation'] = {
  fieldId: 'relation',
  isParent: true,
  children: [
    {
      id: 'front-end',
      createdAt: '2022-12-18T07:54:41.636Z',
      updatedAt: '2022-12-18T07:54:41.636Z',
      publishedAt: '2022-12-18T07:54:41.636Z',
      revisedAt: '2022-12-18T07:54:41.636Z',
      name: 'フロントエンド',
      relation: {
        fieldId: '',
        isParent: true,
        children: [],
        parent: [],
      },
      blogs: [],
    },
  ],
  parent: [],
}
