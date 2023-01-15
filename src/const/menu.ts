import { CATEGORY_PARENT } from './category'
import { PAGE } from './page'

export const GROBAL_MENU = {
  FRONT_END: {
    LABEL: CATEGORY_PARENT.FRONT_END.NAME,
    URL: `${PAGE.CATEGORY}${CATEGORY_PARENT.FRONT_END.ID}`,
    LIST: [
      {
        LABEL: 'React',
        URL: `${PAGE.CATEGORY}react`,
      },
    ],
  },
  BACK_END: {
    LABEL: CATEGORY_PARENT.BACK_END.NAME,
    URL: `${PAGE.CATEGORY}${CATEGORY_PARENT.BACK_END.ID}`,
    LIST: [
      {
        LABEL: 'Golang',
        URL: `${PAGE.CATEGORY}golang`,
      },
    ],
  },
  INFRA: {
    LABEL: CATEGORY_PARENT.INFRA.NAME,
    URL: `${PAGE.CATEGORY}${CATEGORY_PARENT.INFRA.ID}`,
    LIST: [
      {
        LABEL: 'AWS',
        URL: `${PAGE.CATEGORY}aws`,
      },
    ],
  },
  EVENT: {
    LABEL: CATEGORY_PARENT.EVENT.NAME,
    URL: `${PAGE.CATEGORY}${CATEGORY_PARENT.EVENT.ID}`,
    LIST: [
      {
        LABEL: '勉強会',
        URL: `${PAGE.CATEGORY}study-session`,
      },
    ],
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
} as const

export const GROBAL_MENU_LIST = Object.values(GROBAL_MENU)
export const SUB_MENU_LIST = Object.values(SUB_MENU)
