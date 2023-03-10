export const FIXED_PAGE = {
  PROFILE: 'profile',
  SITE_MAP: 'sitemap',
  PRIVACY_POLICY: 'privacy-policy',
  DISCLAIMER: 'disclaimer',
} as const

export const PAGE = {
  ROOT: '/',
  PAGE: '/pages/',
  ARTICLES: '/articles/',
  CATEGORY: '/categories/',
  TAG: '/tags/',
  PROFILE: `/${FIXED_PAGE.PROFILE}`,
  SITE_MAP: `/${FIXED_PAGE.SITE_MAP}`,
  PRIVACY_POLICY: `/${FIXED_PAGE.PRIVACY_POLICY}`,
  DISCLAIMER: `/${FIXED_PAGE.DISCLAIMER}`,
} as const

export type TFixedPage = typeof FIXED_PAGE[keyof typeof FIXED_PAGE]
