import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* Components */
import Button from '@/components/Elements/Button'
import { TwitterSvg } from '@/components/Elements/Svg'
/* Const */
import { AUTHOR, PAGE, TWITTER } from '@/const/index'
import { ARIA_LABEL, IMAGE, DESCRIPTION, BUTTON_LABEL, ICON } from './const'
/* Styles */
import {
  ProfileWrapper,
  ImageWrapper,
  Name,
  Copy,
  DescriptionWrapper,
  DescriptionList,
  DescriptionLabel,
  DescriptionItemList,
  DescriptionItem,
  ButtonWrapper,
  IconWrapper,
} from './index.styles'

const Profile: FC = () => {
  /** プロフィール をクリック */
  const onClickProfile = () => (window.location.href = PAGE.PROFILE)

  return (
    <ProfileWrapper aria-label={ARIA_LABEL.PROFILE}>
      <ImageWrapper onClick={onClickProfile}>
        <Image
          src={IMAGE.PATH}
          alt={IMAGE.ALT}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
        />
      </ImageWrapper>

      <Name>{AUTHOR.NAME}</Name>
      <Copy>{AUTHOR.COPY}</Copy>

      <DescriptionWrapper>
        {DESCRIPTION.map((v) => (
          <DescriptionList key={v.LABEL}>
            <DescriptionLabel>
              {v.LABEL}
              <DescriptionItemList>
                {v.ITEMS.map((v) => (
                  <DescriptionItem key={v}>{v}</DescriptionItem>
                ))}
              </DescriptionItemList>
            </DescriptionLabel>
          </DescriptionList>
        ))}
      </DescriptionWrapper>

      <ButtonWrapper>
        <Button onClick={onClickProfile}>{BUTTON_LABEL}</Button>
      </ButtonWrapper>

      <IconWrapper>
        <Link href={TWITTER.URL} target="_blank">
          <TwitterSvg
            height={ICON.HEIGHT}
            width={ICON.WIDTH}
            color={ICON.COLOR}
          />
        </Link>
      </IconWrapper>
    </ProfileWrapper>
  )
}

export default Profile
export * from './const'
