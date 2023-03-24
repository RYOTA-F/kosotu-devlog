import styled from '@emotion/styled'
/* Const */
import { SIZE } from '@/const/index'

export const CategoryListWrapper = styled.ul`
  display: flex;
  align-items: center;
`

export const FolderSvgWrapper = styled.div`
  margin-right: ${SIZE.SPACE.X8};
`

export const CategoryItemWrapper = styled.li`
  :not(:first-of-type) {
    margin-left: ${SIZE.SPACE.X8};
  }
`
