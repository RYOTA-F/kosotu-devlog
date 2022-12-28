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
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: 0.4s;

  a {
    text-decoration: none;
    color: ${COLOR.GRAY_SCALE.WHITE};
  }

  :hover {
    background-color: ${COLOR.GRAY_SCALE.WHITE};
    border-color: ${COLOR.BLUE_GROUP.MAIN};

    a {
      color: ${COLOR.BLUE_GROUP.MAIN};
    }
  }
`