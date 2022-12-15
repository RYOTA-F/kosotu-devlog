import styled from '@emotion/styled'
/* Const */
import { COLOR, HEADER, SIZE } from '@/const/index'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${HEADER.HEIGHT}px;
  padding: 0 10%;
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.BLUE_GROUP.MAIN};
  align-items: center;
`

export const Title = styled.h1`
  display: inline-block;
  line-height: ${HEADER.HEIGHT}px;
  color: ${COLOR.GRAY_SCALE.WHITE};
  text-decoration: none;
  cursor: pointer;
  font-size: ${SIZE.FONT.X24};
`

export const MenuList = styled.ul`
  display: flex;
`

export const MenuItem = styled.li`
  list-style: none;

  & > a {
    text-decoration: none;
  }
`

export const MenuLabel = styled.span`
  margin: 0 ${SIZE.SPACE.X8};
  color: ${COLOR.GRAY_SCALE.WHITE};
  text-decoration: none;
`
