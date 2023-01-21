import { PAGE } from '@/const/index'
import { IBlog, ICategory } from '@/types/index'

export const blogsDataMock: IBlog[] = [
  {
    id: '3tcpe0tts',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    title: '【EC2】EC2にWordPressブログを構築してみた',
    description:
      'こちらの記事は当ブログ(高卒Devlog)の構築で実際に行った作業手順となります！\nAWS上にブログを構築してみたいという方は是非最後までご覧ください！',
    body: '',
    image: { url: '', height: 1080, width: 1920 },
    categories: [
      {
        id: 'react',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        name: 'React',
        relation: {
          fieldId: '',
          isParent: false,
          children: [],
          parent: [],
        },
        blogs: [],
      },
    ],
    tags: [],
  },
]

export const categoryDataMock: ICategory[] = [
  {
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
      parent: [],
    },
    blogs: [],
  },
  {
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
    },
    blogs: [],
  },
]

export const resultMock = [
  {
    id: categoryDataMock[0].id,
    name: categoryDataMock[0].name,
    url: `${PAGE.CATEGORY}${categoryDataMock[0].id}`,
    children: [
      {
        id: categoryDataMock[1].id,
        name: categoryDataMock[1].name,
        parent: categoryDataMock[1].relation.parent[0].id,
        url: `${PAGE.CATEGORY}${categoryDataMock[1].id}`,
        blogs: [
          {
            title: blogsDataMock[0].title,
            url: `${PAGE.BLOG}${blogsDataMock[0].id}`,
            category: blogsDataMock[0].categories[0].id,
          },
        ],
      },
    ],
  },
]
