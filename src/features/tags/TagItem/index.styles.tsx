import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const TagItemWrapper = styled.div<{ isSP: boolean }>`
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  background-color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  border-radius: 5px;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: ${({ isSP }) => (isSP ? SIZE.FONT.X10 : SIZE.FONT.X14)};
  transition: 0.4s;

  a {
    display: block;
    padding: ${({ isSP }) =>
      isSP ? ` ${SIZE.SPACE.X4}` : `${SIZE.SPACE.X4} ${SIZE.SPACE.X8}`};
    text-decoration: none;
    color: ${COLOR.GRAY_SCALE.GRAY.H4};
  }

  :hover {
    background-color: ${COLOR.GRAY_SCALE.GRAY.H4};
    border-color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};

    a {
      color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
    }
  }
`