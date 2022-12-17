import styled from '@emotion/styled'
/* Const */
import { COLOR } from '@/src/const'
/* Types */
import { CollorPattern } from '@/types/index'

export const ButtonWrapper = styled.button<{
  borderRadius: number
  padding: number
  color: CollorPattern
}>`
  padding: ${({ padding }) => (padding ? `${padding}px` : '10px 20px')};
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.BLUE_GROUP.SUB};
  border: none;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : 9999}px;
  cursor: pointer;
  font-weight: bold;
`
