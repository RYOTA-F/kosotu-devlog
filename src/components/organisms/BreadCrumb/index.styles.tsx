import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const BreadCrumbWrapper = styled.ol`
  display: flex;
  align-items: center;
  padding: ${SIZE.SPACE.X8} 10%;
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  background-color: ${COLOR.GRAY_SCALE.GRAY.H4};
  box-shadow: inset 0 -1px 8px rgb(0 0 0 / 6%);
  font-size: ${SIZE.FONT.X12};
`

export const ListItem = styled.li`
  a {
    color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
    text-decoration: none;
  }

  :hover {
    a {
      opacity: 0.7;
      text-decoration: underline;
    }
  }

  :after {
    content: ' >';
  }

  :not(:first-of-type) {
    margin-left: ${SIZE.SPACE.X8};
  }
`

export const Title = styled.li`
  margin-left: ${SIZE.SPACE.X8};
`

export const HomeWrapper = styled.span`
  margin-left: ${SIZE.SPACE.X4};
`
