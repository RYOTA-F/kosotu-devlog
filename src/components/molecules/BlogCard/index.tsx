import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* Components */
import { TimeSvg } from '@/components/atoms/Svg'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import {
  BlogCardWrapper,
  ContentWrapper,
  Title,
  DateWrapper,
  Date,
} from './index.styles'
/* Types */
import { IBlogCard } from '@/types/index'

const TIME_ICON_SIZE = 12 as const
const IMAGE_ALT = 'Thumbnail'

const BlogCard: FC<IBlogCard> = ({ title, url, image, publishedAt }) => {
  return (
    <BlogCardWrapper aria-label={ARIA_LABEL.BLOG_CARD}>
      <Link href={url}>
        <Image
          src={image.url}
          alt={IMAGE_ALT}
          width={image.width}
          height={image.height}
        />
        <ContentWrapper>
          <Title>{title}</Title>
          <DateWrapper>
            <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
            <Date dateTime={publishedAt}>{publishedAt.slice(0, 10)}</Date>
          </DateWrapper>
        </ContentWrapper>
      </Link>
    </BlogCardWrapper>
  )
}

export default BlogCard
export * from './const'