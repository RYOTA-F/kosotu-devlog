import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const GagItemWrapper = styled.div`
  display: inline-block;
  padding: ${SIZE.SPACE.X4} ${SIZE.SPACE.X8};
  cursor: pointer;
  overflow: hidden;
  background-color: ${COLOR.GRAY_SCALE.GRAY.H4};
  border-radius: 5px;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: ${SIZE.FONT.X14};
  transition: 0.4s;

  a {
    text-decoration: none;
    color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  }

  :hover {
    background-color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
    border-color: ${COLOR.GRAY_SCALE.GRAY.H4};

    a {
      color: ${COLOR.GRAY_SCALE.GRAY.H4};
    }
  }
`
