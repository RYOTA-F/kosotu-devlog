import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Wrapper = styled.section`
  width: 100%;
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
`

export const ContentWrapper = styled.div`
  padding: 0 ${SIZE.SPACE.X20};
`

export const Description = styled.p`
  line-height: 2.5;
  white-space: pre-wrap;
`

export const ListWrapper = styled.div`
  margin: ${SIZE.SPACE.X20} 0 ${SIZE.SPACE.X40};
`
