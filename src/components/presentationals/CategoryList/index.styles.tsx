import styled from '@emotion/styled'
/* Const */
import { SIZE } from '@/const/index'

export const CategoryListWrapper = styled.ul`
  display: flex;
`

export const CategoryItemWrapper = styled.li`
  :not(:first-of-type) {
    margin-left: ${SIZE.SPACE.X8};
  }
`
