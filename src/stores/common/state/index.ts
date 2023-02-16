import { ICommonState } from './types'
import { SITE, GROBAL_MENU2 } from '@/const/index'

// TODO: 一時処理
const menu: ICommonState['globalMenu'] = Object.values(GROBAL_MENU2).map(
  (v) => ({
    label: v.LABEL,
    url: v.URL,
    children: [],
  })
)
// TODO: 一時処理

export const initialCommonState: ICommonState = {
  globalMenu: menu,
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
