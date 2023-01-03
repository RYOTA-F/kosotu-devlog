import styled from '@emotion/styled'
/* Const */
import { SIZE } from '@/const/index'

export const TagListWrapper = styled.ul`
  display: flex;
  align-items: center;
`

export const TagSvgWrapper = styled.div`
  margin-right: ${SIZE.SPACE.X8};
`

export const TagItemWrapper = styled.li`
  :not(:first-of-type) {
    margin-left: ${SIZE.SPACE.X8};
  }
`
