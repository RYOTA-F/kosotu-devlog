import styled from '@emotion/styled'
/* Const */
import { SIZE } from '@/const/index'

export const MainWrapper = styled.div<{ isPC: boolean }>`
  ${({ isPC }) =>
    isPC
      ? `
    display: flex;
    justify-content: space-between;
    padding: ${SIZE.SPACE.X60} 10%;
  `
      : `
    padding: ${SIZE.SPACE.X12};
  `}
`

export const Main = styled.main`
  max-width: 100%;
  overflow-x: hidden;
`

export const Aside = styled.aside<{ isPC: boolean }>`
  min-width: 300px;
  ${({ isPC }) =>
    isPC ? `margin-left: ${SIZE.SPACE.X24}` : `margin-top: ${SIZE.SPACE.X24}`};
`
