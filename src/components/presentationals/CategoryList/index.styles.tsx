import styled from '@emotion/styled'
/* Const */
import { SIZE } from '@/const/index'

export const CategoryListWrapper = styled.div`
  display: flex;
`

export const CategoryItemWrapper = styled.div`
  :not(:first-of-type) {
    margin-left: ${SIZE.SPACE.X8};
  }
`
