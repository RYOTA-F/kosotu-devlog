import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Ul = css`
  ul {
    padding: ${SIZE.SPACE.X16};
    color: ${COLOR.GRAY_SCALE.BLACK};
    background-color: ${COLOR.YELLOW_GROUP.LIST};

    li {
      margin: ${SIZE.SPACE.X4} 0 ${SIZE.SPACE.X12};
      padding: 0 0 ${SIZE.SPACE.X12} ${SIZE.SPACE.X24};
      border-bottom: 1px solid hsla(0, 0%, 78%, 0.5);
      position: relative;

      ::before {
        content: '○';
        position: absolute;
        bottom: 14px;
        left: 4px;
        font-size: 14px;
        color: ${COLOR.GREEN_GLOUP.LIST_CIRCLE};
      }
    }
  }
`
