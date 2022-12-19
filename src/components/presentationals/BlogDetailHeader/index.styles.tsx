import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const BlogDetailHeaderWrapper = styled.section``

export const Title = styled.h1`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${SIZE.FONT.X24};
`

export const ImageWrapper = styled.figure`
  margin-top: ${SIZE.SPACE.X32};
`

export const WelcomeMessageWrapper = styled.div`
  margin-top: ${SIZE.SPACE.X32};
`

export const WelcomeMessageParagraph = styled.p`
  :not(:first-of-type) {
    margin-top: ${SIZE.SPACE.X12};
  }
`
