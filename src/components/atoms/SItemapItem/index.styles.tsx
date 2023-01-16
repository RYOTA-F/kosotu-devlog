import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'
import { TSitemapType } from '@/types/index'

export const SitemapItemWrapper = styled.div<{ type: TSitemapType }>`
  display: inline-block;
  border-left: 8px solid;
  border-color: ${({ type }) => borderColor(type)};
  background-color: ${({ type }) => backgroundColor(type)};
  font-weight: ${({ type }) => type === 'top' && 'bold'};

  a {
    display: block;
    padding: ${SIZE.SPACE.X8} 0;
    padding-left: ${SIZE.SPACE.X20};
    padding-right: ${SIZE.SPACE.X40};
    text-decoration: none;
    font-size: ${SIZE.FONT.X18};
    color: ${({ type }) => linkColor(type)};
  }
`

const borderColor = (type: TSitemapType) => {
  switch (type) {
    case 'children':
      return COLOR.GREEN_GLOUP.BORDER
    case 'blog':
      return COLOR.YELLOW_GROUP.BORDER
    default:
      return COLOR.BLUE_GROUP.MAIN
  }
}

const backgroundColor = (type: TSitemapType) => {
  switch (type) {
    case 'top':
      return COLOR.GRAY_SCALE.GRAY.H4
    case 'children':
      return COLOR.GREEN_GLOUP.LABEL
    case 'blog':
      return COLOR.YELLOW_GROUP.LABEL
    default:
      return COLOR.BLUE_GROUP.SUB
  }
}

const linkColor = (type: TSitemapType) => {
  switch (type) {
    case 'parent':
      return COLOR.GRAY_SCALE.WHITE
    case 'blog':
      return COLOR.GRAY_SCALE.BLACK
    default:
      return COLOR.GRAY_SCALE.GRAY.TEXT_1
  }
}
