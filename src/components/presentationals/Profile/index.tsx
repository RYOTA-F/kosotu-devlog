import { FC } from 'react'
import Image from 'next/image'
/* Components */
import Button from '@/components/atoms/Button'
/* Const */
import { AUTHOR, PAGE } from '@/const/index'
import { ARIA_LABEL, IMAGE, DESCRIPTION, BUTTON_LABEL } from './const'
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
    </ProfileWrapper>
  )
}

export default Profile
export * from './const'
