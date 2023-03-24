import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Components */
import Layout from '@/components/Layout'
/* Features */
import SitemapDetail from '@/features/sitemap/SitemapDetail'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
import useSitemapData from '@/hooks/useSitemapData'
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
