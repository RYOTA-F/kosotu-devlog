import styled from '@emotion/styled'
/* Const */
import { COLOR } from '@/const/index'

export const ButtonWrapper = styled.button<{
  borderRadius: number
  padding: number
  color: 'none' | 'default'
}>`
  padding: ${({ padding }) => (padding ? `${padding}px` : '10px 20px')};
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.BLUE_GROUP.SUB};
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : 9999}px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.4s;

  :hover {
    color: ${COLOR.BLUE_GROUP.SUB};
    background-color: ${COLOR.GRAY_SCALE.WHITE};
    border-color: ${COLOR.BLUE_GROUP.SUB};
  }
`
