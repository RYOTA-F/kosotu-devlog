import { ICategory, IBreadCrumb } from '@/types/index'

export const categoryDataChildrenMock: ICategory = {
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

export const resultCategoryChildren: IBreadCrumb = {
  categoryChildId: null,
  categoryChildName: null,
  categoryParentId: 'react',
  categoryParentName: 'React',
  currentName: 'React',
}

export const categoryDataParentMock: ICategory = {
  id: 'front-end',
  createdAt: '2022-12-18T07:54:41.636Z',
  updatedAt: '2022-12-18T07:54:41.636Z',
  publishedAt: '2022-12-18T07:54:41.636Z',
  revisedAt: '2022-12-18T07:54:41.636Z',
  name: 'フロントエンド',
  relation: {
    fieldId: 'relation',
    isParent: true,
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

export const resultCategoryParent: IBreadCrumb = {
  categoryChildId: null,
  categoryChildName: null,
  categoryParentId: null,
  categoryParentName: null,
  currentName: 'フロントエンド',
}
