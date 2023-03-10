import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
/* Const */
import { SITE, PAGE, TWITTER } from '@/const/index'
import { SEO } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const Seo: FC = () => {
  const { pathname } = useRouter()
  const { seoTitle, seoDescription, seoUrl, seoImage } = useCommonData()
  const isBlogPage = pathname.includes(PAGE.ARTICLES)

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={SITE.TITLE} />
      <meta property="og:description" content={seoDescription} />
      <meta
        property="og:type"
        content={isBlogPage ? SEO.OG.TYPE.ARTICLE : SEO.OG.TYPE.WEBSITE}
      />
      <meta property="og:locale" content={SEO.OG.LOCALE} />
      <meta name="twitter:card" content={SEO.TWITTER.CARD} />
      <meta name="twitter:site" content={TWITTER.ID} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:image" content={seoImage} />
      <link rel="icon" href={SEO.ICON} />
      <link
        rel={SEO.APPLE_TOUCH_ICON.REL}
        sizes={SEO.APPLE_TOUCH_ICON.SIZE}
        href={SEO.APPLE_TOUCH_ICON.PATH}
      />
    </Head>
  )
}

export default Seo
export * from './const'
