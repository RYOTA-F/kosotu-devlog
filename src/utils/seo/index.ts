/* Const */
import { PAGE, FIXED_PAGE, SITE, type TFixedPage } from '@/const/index'
import { DISCLAIMER } from '@/components/organisms/Disclaimer'
import { PRIVACY_POLICY } from '@/components/organisms/PrivacyPolicy'
import { PROFILE } from '@/features/profile/ProfileDetail'
import { TITLE as SITEMAP_TITLE } from '@/components/organisms/Sitemap'
/* Store */
import { initialCommonState } from '@/stores/common'

/**
 * SEO情報を取得: 固定ページ
 */
export const getSeoFromFixed = (pageType: TFixedPage) => {
  const { name, url } = getFixedPageData(pageType)

  return {
    title: `${name} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${url}`,
    image: initialCommonState.seo.image,
  }
}

/**
 * 固定ページ情報を判定
 */
const getFixedPageData = (
  pageType: TFixedPage
): { name: string; url: string } => {
  switch (pageType) {
    case FIXED_PAGE.DISCLAIMER:
      return {
        name: DISCLAIMER.TITEL,
        url: PAGE.DISCLAIMER,
      }
    case FIXED_PAGE.PRIVACY_POLICY:
      return {
        name: PRIVACY_POLICY.TITLE,
        url: PAGE.PRIVACY_POLICY,
      }
    case FIXED_PAGE.PROFILE:
      return {
        name: PROFILE.TITLE,
        url: PAGE.PROFILE,
      }
    case FIXED_PAGE.SITE_MAP:
      return {
        name: SITEMAP_TITLE,
        url: PAGE.SITE_MAP,
      }
    default:
      return {
        name: '',
        url: '',
      }
  }
}
