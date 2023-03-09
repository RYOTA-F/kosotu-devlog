import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const H2 = css`
  h2 {
    margin: ${SIZE.SPACE.X48} 0;
    padding: ${SIZE.SPACE.X16} ${SIZE.SPACE.X24};
    color: ${COLOR.GRAY_SCALE.WHITE};
    background-color: ${COLOR.BLUE_GROUP.MAIN};
    position: relative;

    &::before {
      position: absolute;
      width: 100%;
      top: -4px;
      left: 0;
      border-top: 2px solid ${COLOR.BLUE_GROUP.MAIN};
      content: '';
    }

    &::after {
      position: absolute;
      width: 100%;
      bottom: -4px;
      left: 0;
      border-top: 2px solid ${COLOR.BLUE_GROUP.MAIN};
      content: '';
    }
  }
`
