import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Wrapper = styled.p`
  display: inline-block;
  padding: ${SIZE.SPACE.X12} ${SIZE.SPACE.X16};
  color: ${COLOR.GRAY_SCALE.BLACK};
  background-color: ${COLOR.GRAY_SCALE.WHITE};
  border-left: 8px solid ${COLOR.BLUE_GROUP.MAIN};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 4px -4px rgba(0, 0, 0, 0.1);
`
