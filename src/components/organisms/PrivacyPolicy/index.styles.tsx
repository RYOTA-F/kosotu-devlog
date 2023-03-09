import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Wrapper = styled.div`
  width: 100%;
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
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
