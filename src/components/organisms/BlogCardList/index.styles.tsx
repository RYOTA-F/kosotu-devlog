import styled from '@emotion/styled'
import { SIZE } from '@/const/index'

export const BlogCardListWrapper = styled.article``

export const BlogCardItems = styled.ul<{ isSP: boolean }>`
  ${({ isSP }) =>
    !isSP &&
    `
      display: flex;
      flex-wrap: wrap;
    `}
`

export const BlogCardWrapper = styled.li<{ isSP: boolean }>`
  list-style: none;

  ${({ isSP }) =>
    isSP
      ? `
        width: 100%;
        margin-bottom: ${SIZE.SPACE.X16};
      `
      : `
        padding: 1%;
        width: 48%;
      `}
`
