import styled from '@emotion/styled'
/* Const */
import { COLOR } from '@/const/index'
/* Styles */
import {
  H2,
  H3,
  H4,
  A,
  P,
  Ul,
  Ol,
  Blockquote,
  blogCard,
  twitterEmbed,
} from './styles'

export const BlogBodyWrapper = styled.div`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_4};

  ${H2};
  ${H3};
  ${H4};
  ${A}
  ${P};
  ${Ul};
  ${Ol};
  ${Blockquote}

  ${blogCard}
  ${twitterEmbed}
`
