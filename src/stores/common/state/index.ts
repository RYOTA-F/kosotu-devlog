import { ICommonState } from './types'
import { SITE } from '@/const/index'

export const initialCommonState: ICommonState = {
  breadClumb: undefined,
  tableOfContents: [],
  pagination: {
    currentPage: 0,
    totalPage: 0,
    type: 'blog',
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
