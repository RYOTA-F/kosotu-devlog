import { CATEGORY_PARENT } from './category'
import { PAGE } from './page'

export const GROBAL_MENU = {
  FRONT_END: {
    LABEL: CATEGORY_PARENT.FRONT_END.NAME,
    URL: `${PAGE.CATEGORY}/${CATEGORY_PARENT.FRONT_END.ID}`,
  },
  BACK_END: {
    LABEL: CATEGORY_PARENT.BACK_END.NAME,
    URL: `${PAGE.CATEGORY}/${CATEGORY_PARENT.BACK_END.ID}`,
  },
  INFRA: {
    LABEL: CATEGORY_PARENT.INFRA.NAME,
    URL: `${PAGE.CATEGORY}/${CATEGORY_PARENT.INFRA.ID}`,
  },
  EVENT: {
    LABEL: CATEGORY_PARENT.EVENT.NAME,
    URL: `${PAGE.CATEGORY}/${CATEGORY_PARENT.EVENT.ID}`,
  },
  PROFILE: {
    LABEL: 'プロフィール',
    URL: PAGE.PROFILE,
  },
  // SITE_MAP: {
  //   LABEL: 'サイトマップ',
  //   URL: PAGE.SITE_MAP,
  // },
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
