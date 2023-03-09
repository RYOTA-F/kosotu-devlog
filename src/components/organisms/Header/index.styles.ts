import styled from '@emotion/styled'
/* Const */
import { HEADER } from './const'
import { COLOR, SIZE } from '@/const/index'

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

export const HeaderWrapper = styled.header<{ isPC: boolean }>`
  display: flex;
  justify-content: ${({ isPC }) => (isPC ? 'space-between' : 'center')};
  position: sticky;
  top: 0;
  z-index: 100;
  height: ${({ isPC }) => (isPC ? HEADER.HEIGHT.PC : HEADER.HEIGHT.SP)}px;
  padding: 0 10%;
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.BLUE_GROUP.MAIN};
  align-items: center;
`

export const Title = styled.h1<{ isPC: boolean; isTB: boolean }>`
  display: inline-block;
  line-height: ${HEADER.HEIGHT}px;
  color: ${COLOR.GRAY_SCALE.WHITE};
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ isPC, isTB }) =>
    isPC ? SIZE.FONT.X24 : isTB ? SIZE.FONT.W3 : SIZE.FONT.W5};
`

export const MenuList = styled.ul`
  display: flex;
  height: 100%;
  line-height: ${HEADER.HEIGHT.PC}px;
`

export const MenuItem = styled.li``
