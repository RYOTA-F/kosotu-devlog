import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Components */
import SitemapDetail from '@/features/sitemap/SitemapDetail'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
import useSitemapData from '@/hooks/useSitemapData'
/* Layouts */
import Layout from '@/components/Layout'
/* Types */
import { ISitemap, IGlobalMenu } from '@/types/index'
/* Utils */
import { getSeoFromFixed } from '@/utils/index'

interface ISitemapPage {
  sitemap: ISitemap[]
  globalMenu: IGlobalMenu[]
}

const SitemapPage: NextPage<ISitemapPage> = ({ sitemap, globalMenu }) => {
  const { setGlobalMenu, resetGlobalMenu, setSeo, resetSeo } = useCommonData()
  const { setSitemap, resetSitemap } = useSitemapData()

  useEffect(() => {
    const seo = getSeoFromFixed(FIXED_PAGE.SITE_MAP)
    setSitemap(sitemap)
    setGlobalMenu(globalMenu)
    setSeo(seo)

    return () => {
      resetSitemap()
      resetSeo()
      resetGlobalMenu()
    }
  }, [sitemap, globalMenu])

  return (
    <Layout>
      <SitemapDetail />
    </Layout>
  )
}

export default SitemapPage
export { getStaticProps }
