import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const CategoryDetailHeaderWrapper = styled.div``

export const HeaderWrapper = styled.div<{ isSP: boolean }>`
  h1 {
    margin-bottom: ${({ isSP }) => (isSP ? SIZE.SPACE.X28 : SIZE.SPACE.X32)};
    ${({ isSP }) => isSP && `font-size: ${SIZE.FONT.W5}`};
  }
`

export const HeaderLabel = styled.span<{ isSP: boolean }>`
  margin-left: ${SIZE.SPACE.X20};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${({ isSP }) => (isSP ? SIZE.FONT.W3 : SIZE.FONT.X14)};

  :before {
    content: '- ';
  }
  :after {
    content: ' -';
  }
`

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const FolderSvgWrapper = styled.div`
  margin-right: ${SIZE.SPACE.X8};
  padding-top: ${SIZE.SPACE.X4};
`

export const ChevronRightSvgWrapper = styled.div<{ isSP: boolean }>`
  margin: 0 ${({ isSP }) => (isSP ? SIZE.SPACE.X4 : SIZE.SPACE.X8)};
  padding-top: ${SIZE.SPACE.X4};
`
