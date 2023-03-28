/* Const */
import { COLOR } from '@/const/index'

export const CATEGORY_DETAIL_HEADER = {
  TITLE_LABEL: {
    TEXT: 'category',
    BEFORE: '- ',
    AFTER: ' -',
  },
  FOLDER_SVG: {
    SIZE: 16,
    COLOR: COLOR.BLUE_GROUP.MAIN,
    FILL: COLOR.BLUE_GROUP.MAIN,
  },
  CHEVRON_RIGHT_SVG: {
    SIZE: 16,
    COLOR: COLOR.BLUE_GROUP.MAIN,
  },
} as const

export const ARIA_LABEL = 'categoryDetailHeader' as const
