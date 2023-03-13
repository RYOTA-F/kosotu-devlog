import { ICommonState } from './types'
import { SITE } from '@/const/index'

export const initialCommonState: ICommonState = {
  globalMenu: [
    {
      label: 'フロントエンド',
      url: '/categories/front-end',
      children: [],
    },
    {
      label: 'バックエンド',
      url: '/categories/back-end',
      children: [],
    },
    {
      label: 'インフラ',
      url: '/categories/infra',
      children: [],
    },
    {
      label: 'イベント',
      url: '/categories/event',
      children: [],
    },
    {
      label: 'エトセトラ',
      url: '/categories/etc',
      children: [],
    },
    {
      label: 'サイトマップ',
      url: '/sitemap',
      children: [],
    },
    {
      label: 'プロフィール',
      url: '/profile',
      children: [],
    },
  ],
  breadClumb: undefined,
  tableOfContents: [],
  pagination: {
    currentPage: 0,
    totalPage: 0,
  },
  seo: {
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    url: SITE.URL,
    image: SITE.IMAGE,
  },
  isViewSidenav: false,
}

export * from './types'
