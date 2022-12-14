export const MENU = {
  PROFILE: {
    LABEL: 'プロフィール',
    URL: '/profile',
  },
  SITE_MAP: {
    LABEL: 'サイトマップ',
    URL: '/sitemap',
  },
} as const

export const MENU_LIST = Object.values(MENU)
