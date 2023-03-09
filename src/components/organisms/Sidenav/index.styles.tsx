import styled from '@emotion/styled'
import { COLOR, SIZE } from '@/const/index'
import { HEADER } from '@/components/organisms/Header/const'

export const Wrapper = styled.nav<{ isView: boolean }>`
  position: fixed;
  top: ${HEADER.HEIGHT.SP}px;
  right: ${({ isView }) => (isView ? 0 : '-120%')};
  height: calc(100vh - ${HEADER.HEIGHT.SP}px);
  width: 100vw;
  background-color: ${COLOR.GRAY_SCALE.WHITE};
  transition: all 0.6s;
  overflow-y: scroll;
`

export const Container = styled.div`
  width: 100vw;
  padding-top: 20px;
`

export const Label = styled.h2`
  margin: 0 auto;
  padding: ${SIZE.SPACE.X8} ${SIZE.SPACE.X12};
  width: 80%;
  background-color: ${COLOR.BLUE_GROUP.MAIN};
  font-size: ${SIZE.FONT.X16};
`

export const MenuList = styled.ul`
  width: 80%;
  margin: ${SIZE.SPACE.X12} auto;
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
