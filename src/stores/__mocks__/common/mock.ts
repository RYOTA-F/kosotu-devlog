import { SITE } from '@/const/index'
import { ITableOfContents } from '@/types/index'
import { ICommonState, initialCommonState } from '@/stores/common'

export const tableOfContentsStateMock: ITableOfContents[] = [
  { id: 'test1', text: 'H2', type: 'h2' },
  { id: 'test2', text: 'H3', type: 'h3' },
  { id: 'test3', text: 'H2-1', type: 'h2' },
  { id: 'test4', text: 'H3-2', type: 'h3' },
]

export const paginationStateMock: ICommonState['pagination'] = {
  currentPage: 2,
  totalPage: 5,
}

export const breadCrumbStateMock: ICommonState['breadClumb'] = {
  categoryParentId: 'front-end',
  categoryParentName: 'フロントエンド',
  categoryChildId: 'react',
  categoryChildName: 'React',
  currentName: 'Test',
}

export const seoStateMock: ICommonState['seo'] = {
  title: 'Test',
  description: 'testtest',
  url: `${SITE.URL}/hogehoge`,
  image: initialCommonState.seo.image,
}

export const crobalMenuStateMock: ICommonState['globalMenu'] = [
  {
    label: 'フロントエンド',
    url: '/categories/front-end',
    children: [
      { label: 'hogehoge', url: '/hogehoge' },
      { label: 'fugafuga', url: '/fugafuga' },
    ],
  },
  {
    label: 'バックエンド',
    url: '/categories/back-end',
    children: [
      { label: 'chunchun', url: '/chunchun' },
      { label: 'piyopityo', url: '/piyopityo' },
    ],
  },
  { label: 'インフラ', url: '/categories/infra', children: [] },
  { label: 'イベント', url: '/categories/event', children: [] },
  { label: 'エトセトラ', url: '/categories/etc', children: [] },
  { label: 'サイトマップ', url: '/sitemap', children: [] },
  { label: 'プロフィール', url: '/profile', children: [] },
]
