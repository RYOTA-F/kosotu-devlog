import styled from '@emotion/styled'
/* Const */
import { COLOR, HEADER, SIZE } from '@/const/index'

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 22px;
  padding: 0 10%;
  background-color: ${COLOR.BLUE_GROUP.MAIN};
`

export const CatchPrase = styled.span`
  padding: ${SIZE.SPACE.X4} 0;
  color: ${COLOR.GRAY_SCALE.WHITE};
  font-size: ${SIZE.FONT.X12};
`

export const IconList = styled.ul`
  display: flex;
`

export const Icon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SIZE.SPACE.X4} 0;
  height: 22px;
  width: 22px;
`

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
  height: 100%;
  line-height: ${HEADER.HEIGHT}px;
`

export const MenuItem = styled.li`
  list-style: none;

  & > a {
    display: block;
    text-decoration: none;
  }
`

export const MenuLabel = styled.span`
  margin: 0 ${SIZE.SPACE.X8};
  color: ${COLOR.GRAY_SCALE.WHITE};
  text-decoration: none;
  font-size: ${SIZE.FONT.X14};
`
