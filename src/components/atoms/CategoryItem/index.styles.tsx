import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const CategoryItemWrapper = styled.div`
  display: inline-block;
  padding: ${SIZE.SPACE.X4} ${SIZE.SPACE.X8};
  cursor: pointer;
  overflow: hidden;
  background-color: ${COLOR.BLUE_GROUP.MAIN};
  border-radius: 5px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${COLOR.GRAY_SCALE.WHITE};
  }
`
