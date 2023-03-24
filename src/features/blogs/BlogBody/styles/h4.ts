import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const H4 = css`
  h4 {
    margin: ${SIZE.SPACE.X36} 0 ${SIZE.SPACE.X20};
    padding-left: ${SIZE.SPACE.X16};
    border-left: solid 2px ${COLOR.BLUE_GROUP.MAIN};
    font-size: ${SIZE.FONT.X16};
    line-height: 1.5;
  }
`
