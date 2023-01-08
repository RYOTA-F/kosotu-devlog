import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const PageNotFoundWrapper = styled.section`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  text-align: center;
`

export const Title = styled.h1`
  margin-top: ${SIZE.SPACE.X20};
  font-size: ${SIZE.FONT.X24};
`

export const Message = styled.p`
  margin-top: ${SIZE.SPACE.X40};
  font-size: ${SIZE.FONT.X16};
  line-height: 2;
  white-space: pre-wrap;
`
