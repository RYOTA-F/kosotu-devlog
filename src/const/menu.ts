import { PAGE } from './page'

export const GROBAL_MENU = {
  PROFILE: {
    LABEL: 'プロフィール',
    URL: PAGE.PROFILE,
  },
  SITE_MAP: {
    LABEL: 'サイトマップ',
    URL: PAGE.SITE_MAP,
  },
} as const

export const SUB_MENU = {
  PRIVACY_POLICY: {
    LABEL: 'プライバシーポリシー',
    URL: PAGE.PRIVACY_POLICY,
  },
  TERMS_OF_SERVICE: {
    LABEL: '利用規約',
    URL: PAGE.TERMS_OF_SERVICE,
  },
} as const

export const GROBAL_MENU_LIST = Object.values(GROBAL_MENU)
export const SUB_MENU_LIST = Object.values(SUB_MENU)
