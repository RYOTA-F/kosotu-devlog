import { PAGE, SITE } from '@/const/index'
import { DISCLAIMER } from '@/features/disclaimer/DisclaimerDetail'
import { PRIVACY_POLICY } from '@/features/privacyPolicy/PrivacyPolicy'
import { PROFILE } from '@/features/profile/ProfileDetail'
import { TITLE as SITEMAP_TITLE } from '@/features/sitemap/SitemapDetail'
import { initialCommonState } from '@/stores/common'

export type TSeo = {
  title: string
  description: string
  url: string
  image: string
}

export const fixedResultMock = {
  profile: {
    title: `${PROFILE.TITLE} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.PROFILE}`,
    image: initialCommonState.seo.image,
  },
  sitemap: {
    title: `${SITEMAP_TITLE} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.SITE_MAP}`,
    image: initialCommonState.seo.image,
  },
  privacyPolicy: {
    title: `${PRIVACY_POLICY.TITLE} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.PRIVACY_POLICY}`,
    image: initialCommonState.seo.image,
  },
  disclaimer: {
    title: `${DISCLAIMER.TITEL} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.DISCLAIMER}`,
    image: initialCommonState.seo.image,
  },
  default: {
    title: ` - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: SITE.URL,
    image: initialCommonState.seo.image,
  },
}
