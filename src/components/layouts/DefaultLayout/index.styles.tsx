import styled from '@emotion/styled'
/* Const */
import { SIZE } from '@/const/index'

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${SIZE.SPACE.X60} 10%;
`

export const Main = styled.main`
  max-width: 100%;
  overflow-x: hidden;
`

export const Aside = styled.aside`
  margin-left: ${SIZE.SPACE.X24};
  min-width: 300px;
`
