import { useContext } from 'react'
/* Stores */
import { SitemapContext, SITEMAP_ACTION_TYPES } from '@/stores/sitemap'
import { ISitemap } from '@/types/index'

const useSitemapData = () => {
  const { state, dispatch } = useContext(SitemapContext)

  // サイトマップ
  const sitemap = state.sitemap

  // サイトマップセット
  const setSitemap = (sitemap: ISitemap[]) => {
    dispatch({
      type: SITEMAP_ACTION_TYPES.UPDATE_SITEMAP,
      payload: sitemap,
    })
  }

  // サイトマップリセット
  const resetSitemap = () => {
    dispatch({
      type: SITEMAP_ACTION_TYPES.UPDATE_SITEMAP,
      payload: [],
    })
  }

  return {
    sitemap,
    setSitemap,
    resetSitemap,
  }
}

export default useSitemapData
