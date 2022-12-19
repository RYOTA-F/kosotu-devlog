import { FC } from 'react'
import Image from 'next/image'
/* Const */
import { BLOG_DETAIL, ARIA_LABEL } from './const'
/* Styles */
import {
  BlogDetailHeaderWrapper,
  Title,
  ImageWrapper,
  WelcomeMessageWrapper,
  WelcomeMessageParagraph,
} from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

const IMAGE = {
  ALT: 'Thumbnail',
  WIDTH: 844,
  HEIGHT: 474,
} as const

export type TBlogDetailHeader = Pick<IBlog, 'title' | 'description' | 'image'>

const BlogDetailHeader: FC<TBlogDetailHeader> = ({
  title,
  description,
  image,
}) => {
  return (
    <BlogDetailHeaderWrapper aria-label={ARIA_LABEL.BLOG_DETAIL_HEADER}>
      <Title>{title}</Title>
      <ImageWrapper>
        <Image
          src={image.url}
          alt={IMAGE.ALT}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
        />
      </ImageWrapper>
      <WelcomeMessageWrapper>
        <WelcomeMessageParagraph>
          {BLOG_DETAIL.WELCOME_MESSAGE}
        </WelcomeMessageParagraph>
        <WelcomeMessageParagraph>
          {BLOG_DETAIL.THANKS_MESSAGE}
        </WelcomeMessageParagraph>
        <WelcomeMessageParagraph>{description}</WelcomeMessageParagraph>
      </WelcomeMessageWrapper>
    </BlogDetailHeaderWrapper>
  )
}

export default BlogDetailHeader
export * from './const'
