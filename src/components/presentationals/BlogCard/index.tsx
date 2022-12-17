import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* Components */
import { TimeSvg } from '@/components/atoms/Svg'
/* Const */
import { SIZE } from '@/src/const'
/* Styles */
import {
  BlogCardWrapper,
  ContentWrapper,
  Title,
  DateWrapper,
  Date,
} from './index.styles'
/* Types */
import { IBlogCard } from '@/types/blog'

const TIME_ICON_SIZE = 12 as const

const BlogCard: FC<IBlogCard> = ({ title, thumbnail, url, publishedAt }) => {
  return (
    <BlogCardWrapper>
      <Link href={url}>
        <Image
          src={thumbnail.url}
          alt={thumbnail.alt}
          width={thumbnail.width}
          height={thumbnail.height}
        />
        <ContentWrapper>
          <Title>{title}</Title>
          <DateWrapper>
            <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
            <Date>{publishedAt}</Date>
          </DateWrapper>
        </ContentWrapper>
      </Link>
    </BlogCardWrapper>
  )
}

export default BlogCard
