import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const CategoryDetailHeaderWrapper = styled.div``

export const HeaderWrapper = styled.div`
  h1 {
    margin-bottom: ${SIZE.SPACE.X32};
  }
`

export const HeaderLabel = styled.span`
  margin-left: ${SIZE.SPACE.X20};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
  font-size: ${SIZE.FONT.X14};

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

export const ChevronRightSvgWrapper = styled.div`
  margin: 0 ${SIZE.SPACE.X8};
  padding-top: ${SIZE.SPACE.X4};
`
