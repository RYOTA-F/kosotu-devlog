import styled from '@emotion/styled'
/* Const */
import { COLOR } from '@/const/index'

export const PaginationItemWrapper = styled.div<{ isCurrentPage: boolean }>`
  height: 36px;
  width: 36px;
  line-height: 36px;
  text-align: center;
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? COLOR.BLUE_GROUP.MAIN : COLOR.GRAY_SCALE.GRAY.PAGINATION};
  transition: 0.3s all;

  > a {
    display: block;
    color: ${COLOR.GRAY_SCALE.WHITE};
    text-decoration: none;
  }

  ${({ isCurrentPage }) =>
    !isCurrentPage &&
    `
      :hover {
        background-color: ${COLOR.BLUE_GROUP.MAIN};
        cursor: pointer;
      }
    `}
`
