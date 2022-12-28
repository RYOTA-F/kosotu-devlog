import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const BlogDetailHeaderWrapper = styled.section``

export const Title = styled.h1`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  font-size: ${SIZE.FONT.X24};
`

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${SIZE.SPACE.X16};
`

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${SIZE.SPACE.X32};
  margin-bottom: ${SIZE.SPACE.X4};
`

export const Date = styled.time`
  margin-left: ${SIZE.SPACE.X4};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${SIZE.FONT.X16};
`

export const ImageWrapper = styled.figure`
  margin-top: ${SIZE.SPACE.X20};
`

export const WelcomeMessageWrapper = styled.div`
  margin-top: ${SIZE.SPACE.X32};
`

export const WelcomeMessage = styled.p`
  :not(:first-of-type) {
    margin-top: ${SIZE.SPACE.X12};
  }
`

export const WelcomeMessageDescription = styled.p`
  margin-top: ${SIZE.SPACE.X16};
  white-space: pre-wrap;
  line-height: 2.2;
`
