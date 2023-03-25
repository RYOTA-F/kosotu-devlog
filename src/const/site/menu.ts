import { GOOGLE_FORM } from './contact'
import { PAGE } from './page'

export const GROBAL_MENU = {
  FRONT_END: {
    LABEL: 'フロントエンド',
    URL: `${PAGE.CATEGORY}front-end`,
    LIST: [],
  },
  BACK_END: {
    LABEL: 'バックエンド',
    URL: `${PAGE.CATEGORY}back-end`,
    LIST: [],
  },
  INFRA: {
    LABEL: 'インフラ',
    URL: `${PAGE.CATEGORY}infra`,
    LIST: [],
  },
  EVENT: {
    LABEL: 'イベント',
    URL: `${PAGE.CATEGORY}event`,
    LIST: [],
  },
  ETC: {
    LABEL: 'エトセトラ',
    URL: `${PAGE.CATEGORY}etc`,
    LIST: [],
  },
  SITE_MAP: {
    LABEL: 'サイトマップ',
    URL: PAGE.SITE_MAP,
    LIST: [],
  },
  PROFILE: {
    LABEL: 'プロフィール',
    URL: PAGE.PROFILE,
    LIST: [],
  },
} as const

export const SUB_MENU = {
  PRIVACY_POLICY: {
    LABEL: 'プライバシーポリシー',
    URL: PAGE.PRIVACY_POLICY,
  },
  TERMS_OF_SERVICE: {
    LABEL: '免責事項',
    URL: PAGE.DISCLAIMER,
  },
  CONCACT: {
    LABEL: 'お問合せ',
    URL: GOOGLE_FORM.URL,
  },
} as const

export const GROBAL_MENU_LIST = Object.values(GROBAL_MENU)
export const SUB_MENU_LIST = Object.values(SUB_MENU)
