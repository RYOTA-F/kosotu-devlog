import styled from '@emotion/styled'
import { COLOR } from '@/const/index'

export const Wrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
`

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`

export const Border = styled.span`
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 14px;
  height: 2px;
  border-radius: 5px;
  background: ${COLOR.GRAY_SCALE.WHITE};
  width: 45%;

  :nth-of-type(1) {
    top: 17px;
  }

  :nth-of-type(2) {
    top: 24px;
  }

  :nth-of-type(3) {
    top: 31px;
  }
`
