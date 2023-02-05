import styled from '@emotion/styled'
import { COLOR, SIZE } from '@/const/index'
import { HEADER } from '@/components/organisms/Header/const'

export const Wrapper = styled.nav<{ isView: boolean }>`
  position: fixed;
  top: ${HEADER.HEIGHT.SP}px;
  right: ${({ isView }) => (isView ? 0 : '-120%')};
  height: calc(100vh - ${HEADER.HEIGHT.SP}px);
  width: 100vw;
  padding: ${SIZE.SPACE.X16} ${SIZE.SPACE.X36};
  background-color: ${COLOR.GRAY_SCALE.WHITE};
  transition: all 0.6s;
`

export const Label = styled.h2`
  display: block;
  position: absolute;
  width: 80vw;
  left: 50%;
  transform: translateX(-43%);
  background-color: ${COLOR.BLUE_GROUP.MAIN};
  font-size: ${SIZE.FONT.X16};
  padding: ${SIZE.SPACE.X8} ${SIZE.SPACE.X12};
`

export const MenuList = styled.ul`
  width: 80%;
  padding: ${SIZE.SPACE.X60} ${SIZE.SPACE.X72};
`

export const MenuItem = styled.li<{ isChild?: boolean }>`
  display: block;
  border-bottom: 1px solid ${COLOR.GRAY_SCALE.GRAY.BORDER_1};
  ${({ isChild }) => isChild && `padding-left: ${SIZE.SPACE.X28}`};

  a {
    display: block;
    color: ${COLOR.GRAY_SCALE.BLACK};
    text-decoration: none;
    line-height: 3;
  }

  :hover {
    background-color: ${COLOR.GRAY_SCALE.GRAY.H4};

    a {
      span {
        margin-right: ${SIZE.SPACE.X8};
        transition: all 0.3s;
      }
    }
  }
`

export const ChevronRightSvgWrapper = styled.span`
  margin-right: ${SIZE.SPACE.X4};
`
