import { FC } from 'react'
/* Components */
import { H1, H4 } from '@/components/atoms/Heading'
/* Const */
import { DISCLAIMER, ARIA_LABEL } from './const'
/* Styles */
import { Wrapper, Description, Content, List, ListItem } from './index.styles'

const Disclaimer: FC = () => {
  return (
    <Wrapper aria-label={ARIA_LABEL.DISCLAIMER}>
      <H1>{DISCLAIMER.TITEL}</H1>
      <Description>{DISCLAIMER.DESCRIPTION}</Description>
      {/* コメント */}
      <H4>{DISCLAIMER.COMMENT.TITLE}</H4>
      <Content>
        {DISCLAIMER.COMMENT.CONTENT}
        <List>
          {DISCLAIMER.COMMENT.LIST.map((v) => (
            <ListItem key={v}>{v}</ListItem>
          ))}
        </List>
      </Content>
      {/* 情報 */}
      <H4>{DISCLAIMER.INFORMATION.TITLE}</H4>
      <Content>{DISCLAIMER.INFORMATION.CONTENT}</Content>
      {/* 損害等の責任 */}
      <H4>{DISCLAIMER.RESPONSIBILITY.TITLE}</H4>
      <Content>{DISCLAIMER.RESPONSIBILITY.CONTENT}</Content>
      {/* 著作権・肖像権 */}
      <H4>{DISCLAIMER.COPYRIGHT.TITLE}</H4>
      <Content>{DISCLAIMER.COPYRIGHT.CONTENT}</Content>
      {/* 無断転載 */}
      <H4>{DISCLAIMER.REPRINT.TITLE}</H4>
      <Content>{DISCLAIMER.REPRINT.CONTENT}</Content>
    </Wrapper>
  )
}

export default Disclaimer
export * from './const'
