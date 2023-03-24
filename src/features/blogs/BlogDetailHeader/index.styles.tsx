import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const BlogDetailHeaderWrapper = styled.section``

export const Title = styled.h1<{ isSP: boolean }>`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  font-size: ${({ isSP }) => (isSP ? SIZE.FONT.W5 : SIZE.FONT.X24)};
`

export const DataWrapper = styled.div<{ isSP: boolean }>`
  ${({ isSP }) =>
    !isSP &&
    `
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    `}
  margin-top: ${SIZE.SPACE.X16};
`

export const CategoryListWrapper = styled.div`
  margin-right: ${SIZE.SPACE.X20};
`

export const TagListWrapper = styled.div<{ isSP: boolean }>`
  margin-right: ${SIZE.SPACE.X32};
  ${({ isSP }) => isSP && `margin-top: ${SIZE.SPACE.X4}`};
`

export const DateWrapper = styled.div<{ isSP: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: ${SIZE.SPACE.X4};
  ${({ isSP }) => isSP && `margin-top: ${SIZE.SPACE.X4}`};
`

export const Date = styled.time<{ isSP: boolean }>`
  margin-left: ${SIZE.SPACE.X4};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${({ isSP }) => (isSP ? SIZE.FONT.W3 : SIZE.FONT.X16)};
`

export const ImageWrapper = styled.figure`
  margin-top: ${SIZE.SPACE.X20};

  img {
    width: 100%;
    height: auto;
  }
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

export const TableOfContentsWrapper = styled.div<{ isSP: boolean }>`
  width: ${({ isSP }) => (isSP ? '100%' : '90%')};
  margin: ${SIZE.SPACE.X32} auto;
`
