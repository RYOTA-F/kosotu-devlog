import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Wrapper = styled.div`
  width: 100%;
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
`

export const H1 = styled.h1`
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

export const Description = styled.p`
  margin: ${SIZE.SPACE.X60} 0;
  line-height: 1.8;
`

export const Content = styled.div`
  line-height: 1.8;
`

export const List = styled.ul`
  margin: ${SIZE.SPACE.X32} 0;
  padding-left: ${SIZE.SPACE.X24};
`

export const ListItem = styled.li`
  position: relative;

  :before {
    position: absolute;
    left: -20px;
    content: '・';
    font-weight: bold;
  }
`

export const Link = styled.a`
  display: block;
  padding: ${SIZE.SPACE.X12};
  color: ${COLOR.BLUE_GROUP.LINK};
  text-decoration: none;
`
