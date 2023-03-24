import { FC } from 'react'
/* Components */
import { H1, H3 } from '@/components/atoms/Heading'
/* Const */
import { DISCLAIMER, ARIA_LABEL } from './const'
/* Styles */
import { Wrapper, Description, Content, List, ListItem } from './index.styles'

const DisclaimerDetail: FC = () => {
  return (
    <Wrapper aria-label={ARIA_LABEL.DISCLAIMER_DETAIL}>
      <H1>{DISCLAIMER.TITEL}</H1>
      <Description>{DISCLAIMER.DESCRIPTION}</Description>
      {/* コメント */}
      <H3>{DISCLAIMER.COMMENT.TITLE}</H3>
      <Content>
        {DISCLAIMER.COMMENT.CONTENT}
        <List>
          {DISCLAIMER.COMMENT.LIST.map((v) => (
            <ListItem key={v}>{v}</ListItem>
          ))}
        </List>
      </Content>
      {/* 情報 */}
      <H3>{DISCLAIMER.INFORMATION.TITLE}</H3>
      <Content>{DISCLAIMER.INFORMATION.CONTENT}</Content>
      {/* 損害等の責任 */}
      <H3>{DISCLAIMER.RESPONSIBILITY.TITLE}</H3>
      <Content>{DISCLAIMER.RESPONSIBILITY.CONTENT}</Content>
      {/* 著作権・肖像権 */}
      <H3>{DISCLAIMER.COPYRIGHT.TITLE}</H3>
      <Content>{DISCLAIMER.COPYRIGHT.CONTENT}</Content>
      {/* 無断転載 */}
      <H3>{DISCLAIMER.REPRINT.TITLE}</H3>
      <Content>{DISCLAIMER.REPRINT.CONTENT}</Content>
    </Wrapper>
  )
}

export default DisclaimerDetail
export * from './const'
