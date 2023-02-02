import styled from '@emotion/styled'
import { COLOR } from '@/const/index'

const SIZE = 50 as const

export const ScrollTopButtonWrapper = styled.button`
  height: ${SIZE}px;
  width: ${SIZE}px;
  border-radius: 50%;
  text-align: center;
  padding-top: 4px;
  border: 1px solid ${COLOR.BLUE_GROUP.MAIN};
  opacity: 0.75;
  transform: rotate(270deg);
  z-index: 100;
`
