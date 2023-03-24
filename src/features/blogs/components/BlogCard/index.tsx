import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
/* Components */
import { TimeSvg } from '@/components/Elements/Svg'
/* Const */
import { ARIA_LABEL } from './const'
/* Libs */
import { formatDate } from '@/libs/dayjs'
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

const BlogCard: FC<IBlogCard> = ({ title, id, image, publishedAt }) => {
  return (
    <BlogCardWrapper aria-label={ARIA_LABEL.BLOG_CARD}>
      <Link href={`${PAGE.ARTICLES}${id}`}>
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
            <Date dateTime={formatDate(publishedAt)}>
              {formatDate(publishedAt)}
            </Date>
          </DateWrapper>
        </ContentWrapper>
      </Link>
    </BlogCardWrapper>
  )
}

export default BlogCard
export * from './const'
