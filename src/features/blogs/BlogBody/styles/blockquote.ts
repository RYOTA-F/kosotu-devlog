import { css } from '@emotion/react'
/* Const */
import { SIZE } from '@/const/index'

export const Blockquote = css`
  blockquote {
    margin: 0;
    padding: ${SIZE.SPACE.X24} ${SIZE.SPACE.X24};
    background-color: hsla(0, 0%, 78%, 0.15);

    em {
      font-size: 0.8em;
      opacity: 0.8;
    }
  }
`
