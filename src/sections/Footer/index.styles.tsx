import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const FooterWrapper = styled.footer`
  padding: ${SIZE.SPACE.X16} 0;
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.GRAY_SCALE.SUB};
`

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
`

export const MenuItem = styled.li`
  padding: 0 ${SIZE.SPACE.X12};
  list-style: none;
  border-right: 1px solid ${COLOR.GRAY_SCALE.WHITE};

  & > a {
    text-decoration: none;
  }

  &:first-child {
    border-left: 1px solid ${COLOR.GRAY_SCALE.WHITE};
  }
`

export const MenuLabel = styled.span`
  color: ${COLOR.GRAY_SCALE.WHITE};
  text-decoration: none;
  font-size: ${SIZE.FONT.X14};
`

export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CopyMark = styled.span`
  margin-right: ${SIZE.SPACE.X4};
  font-size: ${SIZE.FONT.X16};
`

export const CopyText = styled.span`
  font-size: ${SIZE.FONT.X12};
`
