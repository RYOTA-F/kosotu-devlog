import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const HeaderWrapper = styled.div`
  h1 {
    margin-bottom: ${SIZE.SPACE.X32};
  }
`

export const HeaderLabel = styled.span`
  margin-left: ${SIZE.SPACE.X20};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${SIZE.FONT.X14};

  :before {
    content: '- ';
  }
  :after {
    content: ' -';
  }
`
