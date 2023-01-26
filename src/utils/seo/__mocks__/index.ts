import { PAGE, SITE } from '@/const/index'
import { DISCLAIMER } from '@/components/organisms/Disclaimer'
import { PRIVACY_POLICY } from '@/components/organisms/PrivacyPolicy'
import { PROFILE } from '@/components/organisms/Profile'
import { TITLE as SITEMAP_TITLE } from '@/components/organisms/Sitemap'
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
