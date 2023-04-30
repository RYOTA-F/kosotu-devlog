import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
/* Const */
import { SITE, PAGE, TWITTER } from '@/const/index'
import { SEO } from './const'

export interface ISeo {
  title: string
  description: string
  url: string
  image: string
}

const Seo: FC<ISeo> = ({ title, description, url, image }) => {
  const { pathname } = useRouter()
  const isBlogPage = pathname.includes(PAGE.ARTICLES)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.TITLE} />
      <meta property="og:description" content={description} />
      <meta
        property="og:type"
        content={isBlogPage ? SEO.OG.TYPE.ARTICLE : SEO.OG.TYPE.WEBSITE}
      />
      <meta property="og:locale" content={SEO.OG.LOCALE} />
      <meta name="twitter:card" content={SEO.TWITTER.CARD} />
      <meta name="twitter:site" content={TWITTER.ID} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
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
