import { ICategoryList } from '../'

export const defaultProps: ICategoryList = {
  categories: [
    {
      id: 'study-session',
      createdAt: '2022-12-20T17:45:24.193Z',
      updatedAt: '2022-12-20T17:45:24.193Z',
      publishedAt: '2022-12-20T17:45:24.193Z',
      revisedAt: '2022-12-20T17:45:24.193Z',
      name: '勉強会',
      parent: ['イベント'],
      blogs: [
        {
          id: 'devguil-2022-1210',
        },
      ],
    },
    {
      id: 'react',
      createdAt: '2021-05-22T14:36:56.223Z',
      updatedAt: '2022-12-18T06:32:08.515Z',
      publishedAt: '2021-05-22T14:36:56.223Z',
      revisedAt: '2022-12-18T06:32:08.515Z',
      name: 'React',
      parent: ['フロントエンド'],
      blogs: [],
    },
  ],
}
