import { FC } from 'react'
/* Components */
import { H1, H2 } from '@/components/atoms/Heading'
import Label from '@/components/atoms/Label'
import List from '@/components/atoms/List'
/* Const */
import { PROFILE, ARIA_LABEL } from './const'
/* Styles */
import {
  Wrapper,
  ContentWrapper,
  Description,
  ListWrapper,
} from './index.styles'

const Profile: FC = () => {
  return (
    <Wrapper aria-label={ARIA_LABEL.PROFILE}>
      <H1>{PROFILE.TITLE}</H1>
      <ContentWrapper>
        <Description>{PROFILE.DESCRIPTION}</Description>
      </ContentWrapper>
      {/* 概要 */}
      <H2>{PROFILE.ABOUT.TITLE}</H2>
      <ContentWrapper>
        <Description>{PROFILE.ABOUT.CONTENT}</Description>
        <ListWrapper>
          <Label>{PROFILE.ABOUT.LABEL}</Label>
          <List list={PROFILE.ABOUT.LIST.map<string>((v) => v)} />
        </ListWrapper>
      </ContentWrapper>
      {/* 目的 */}
      <H2>{PROFILE.PURPOSE.TITLE}</H2>
      <ContentWrapper>
        <Description>{PROFILE.PURPOSE.CONTENT}</Description>
      </ContentWrapper>
      {/* 技術スタック */}
      <H2>{PROFILE.SKILL.TITLE}</H2>
      <ContentWrapper>
        {/* フロントエンド */}
        <Label>{PROFILE.SKILL.FRONT_END.LABEL}</Label>
        <List list={PROFILE.SKILL.FRONT_END.LIST.map<string>((v) => v)} />
        {/* バックエンド */}
        <ListWrapper>
          <Label>{PROFILE.SKILL.BACK_END.LABEL}</Label>
          <List list={PROFILE.SKILL.BACK_END.LIST.map<string>((v) => v)} />
        </ListWrapper>
        {/* インフラ */}
        <ListWrapper>
          <Label>{PROFILE.SKILL.INFRA.LABEL}</Label>
          <List list={PROFILE.SKILL.INFRA.LIST.map<string>((v) => v)} />
        </ListWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Profile
export * from './const'
