import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const AccordionMenuWrapper = styled.div`
  margin: 0 ${SIZE.SPACE.X12};
  font-size: ${SIZE.FONT.X14};
  position: relative;

  > a {
    display: block;
    color: ${COLOR.GRAY_SCALE.WHITE};
    text-decoration: none;
  }
`

export const MenuContainer = styled.ul`
  background-color: ${COLOR.GRAY_SCALE.WHITE};
  transform: translateX(-25%);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  position: absolute;
`

export const MenuItem = styled.li`
  display: block;
  width: 200px;

  a {
    display: block;
    padding: 0 ${SIZE.SPACE.X12};
    color: ${COLOR.GRAY_SCALE.BLACK};
    text-decoration: none;
    line-height: 4;

    span {
      margin-right: ${SIZE.SPACE.X4};
    }
  }

  :hover {
    background-color: ${COLOR.GRAY_SCALE.GRAY.H4};

    a {
      span {
        margin-right: ${SIZE.SPACE.X8};
      }
    }
  }
`

export const ChevronRightSvgWrapper = styled.span`
  margin-right: ${SIZE.SPACE.X4};
`
