export const GROBAL_MENU = {
  PROFILE: {
    LABEL: 'プロフィール',
    URL: '/profile',
  },
  SITE_MAP: {
    LABEL: 'サイトマップ',
    URL: '/sitemap',
  },
} as const

export const SUB_MENU = {
  PRIVACY_POLICY: {
    LABEL: 'プライバシーポリシー',
    URL: '/privacy-policy',
  },
  TERMS_OF_SERVICE: {
    LABEL: '利用規約',
    URL: '/terms-of-service',
  },
} as const

export const GROBAL_MENU_LIST = Object.values(GROBAL_MENU)
export const SUB_MENU_LIST = Object.values(SUB_MENU)
