import { ISitemap } from '@/types/index'

const SITEMAP_ACTION_TYPES = {
  UPDATE_SITEMAP: 'UPDATE_SITEMAP',
} as const

type ISitemapActionTypesConst = typeof SITEMAP_ACTION_TYPES
type ISitemapActionTypes =
  ISitemapActionTypesConst[keyof typeof SITEMAP_ACTION_TYPES]

/* サイトマップ更新 */
type TUpdateSitemapAction = {
  type: ISitemapActionTypesConst['UPDATE_SITEMAP']
  payload: ISitemap[]
}

type ISitemapActions = TUpdateSitemapAction

export { SITEMAP_ACTION_TYPES, type ISitemapActions, type ISitemapActionTypes }
