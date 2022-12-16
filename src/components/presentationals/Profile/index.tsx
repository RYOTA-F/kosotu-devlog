import { FC } from 'react'
import Image from 'next/image'
/* Const */
import { AUTHOR } from '@/const/index'
import { ARIA_LABEL, IMAGE, DESCRIPTION } from './const'
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
} from './index.styles'

const Profile: FC = () => {
  return (
    <ProfileWrapper aria-label={ARIA_LABEL.PROFILE}>
      <ImageWrapper>
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
    </ProfileWrapper>
  )
}

export default Profile
export * from './const'
