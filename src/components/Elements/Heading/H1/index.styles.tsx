import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Wrapper = styled.h1`
  margin-bottom: ${SIZE.SPACE.X60};
  padding-left: ${SIZE.SPACE.X16};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  font-size: ${SIZE.FONT.X24};
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    bottom: -10px;
    left: 0;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      ${COLOR.BLUE_GROUP.MAIN} 0%,
      ${COLOR.BLUE_GROUP.MAIN} 30%,
      rgba(150, 150, 150, 0.2) 30%,
      rgba(150, 150, 150, 0.2) 100%
    );
  }
`
