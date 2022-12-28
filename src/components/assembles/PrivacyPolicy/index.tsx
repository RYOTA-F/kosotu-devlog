import { FC } from 'react'
/* Components */
import { H4 } from '@/components/atoms/Heading'
/* Const */
import { PRIVACY_POLICY, ARIA_LABEL } from './const'
/* Styles */
import {
  Wrapper,
  H1,
  Description,
  Content,
  List,
  ListItem,
  Link,
} from './index.styles'

const PrivacyPolicy: FC = () => {
  return (
    <Wrapper aria-label={ARIA_LABEL.PRIVACY_POLICY}>
      <H1>{PRIVACY_POLICY.TITLE}</H1>
      <Description>{PRIVACY_POLICY.DESCRIPTION}</Description>
      {/* 個人情報保護 */}
      <H4>{PRIVACY_POLICY.PERSONAL_INFORMATION.TITLE}</H4>
      <Content>{PRIVACY_POLICY.PERSONAL_INFORMATION.CONTENT}</Content>
      {/* Cookie */}
      <H4>{PRIVACY_POLICY.COOKIE.TITLE}</H4>
      <Content>
        {PRIVACY_POLICY.COOKIE.DESCRIPTION}
        <List>
          {PRIVACY_POLICY.COOKIE.LIST.map((v) => (
            <ListItem key={v}>{v}</ListItem>
          ))}
        </List>
        {PRIVACY_POLICY.COOKIE.CONTENT}
      </Content>
      {/* 広告 */}
      <H4>{PRIVACY_POLICY.ADVERTISEMENT.TITLE}</H4>
      <Content>
        {PRIVACY_POLICY.ADVERTISEMENT.CONTENT}
        <Link href={PRIVACY_POLICY.ADVERTISEMENT.LINK.URL} target="_blank">
          {PRIVACY_POLICY.ADVERTISEMENT.LINK.TEXT}
        </Link>
      </Content>
      {/* アクセス解析 */}
      <H4>{PRIVACY_POLICY.ACCESS_ANALYSIS.TITLE}</H4>
      <Content>{PRIVACY_POLICY.ACCESS_ANALYSIS.CONTENT}</Content>
      <Link href={PRIVACY_POLICY.ACCESS_ANALYSIS.LINK.URL} target="_blank">
        {PRIVACY_POLICY.ACCESS_ANALYSIS.LINK.TEXT}
      </Link>
    </Wrapper>
  )
}

export default PrivacyPolicy
export * from './const'
