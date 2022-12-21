import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const H3 = css`
  h3 {
    margin: ${SIZE.SPACE.X40} 0;
    padding: ${SIZE.SPACE.X12};
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      bottom: -10px;
      left: 0;
      height: 2px;
      background: repeating-linear-gradient(
        90deg,
        ${COLOR.BLUE_GROUP.MAIN} 0%,
        ${COLOR.BLUE_GROUP.MAIN} 30%,
        rgba(150, 150, 150, 0.2) 30%,
        rgba(150, 150, 150, 0.2) 100%
      );
    }
  }
`
