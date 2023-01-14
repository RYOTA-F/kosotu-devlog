/* Const */
import { COLOR, SITE } from '@/const/index'

export const HEADER = {
  CATCH_PHRASE: SITE.DESCRIPTION,
  ICON: {
    COLOR: COLOR.GRAY_SCALE.WHITE,
    HEIGHT: 14,
    WIDTH: 14,
  },
} as const

export const ARIA_LABEL = {
  HEADER: 'header',
} as const
