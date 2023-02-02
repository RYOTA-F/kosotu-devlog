import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const CategoryLabelWrapper = styled.div<{ isSP: boolean }>`
  display: inline-block;
  padding: ${({ isSP }) =>
    isSP ? ` ${SIZE.SPACE.X4}` : `${SIZE.SPACE.X4} ${SIZE.SPACE.X8}`};
  color: ${COLOR.BLUE_GROUP.MAIN};
  background-color: ${COLOR.GRAY_SCALE.WHITE};
  border: 1px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: ${({ isSP }) => (isSP ? SIZE.FONT.X10 : SIZE.FONT.X14)};
  border-color: ${COLOR.BLUE_GROUP.MAIN};
`
