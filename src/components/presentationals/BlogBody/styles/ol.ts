import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Ol = css`
  ol {
    padding: ${SIZE.SPACE.X16};
    color: ${COLOR.GRAY_SCALE.BLACK};
    background-color: ${COLOR.YELLOW_GROUP.LIST};
    counter-reset: number;

    li {
      margin: ${SIZE.SPACE.X4} 0 ${SIZE.SPACE.X12};
      padding: 0 0 ${SIZE.SPACE.X12} ${SIZE.SPACE.X32};
      border-bottom: 1px solid hsla(0, 0%, 78%, 0.5);
      position: relative;

      ::before {
        content: counter(number);
        counter-increment: number;
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        color: ${COLOR.GRAY_SCALE.WHITE};
        background-color: ${COLOR.BLUE_GROUP.MAIN};
        border-radius: 50%;
      }
    }
  }
`
