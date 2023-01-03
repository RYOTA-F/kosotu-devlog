import { FC } from 'react'
import Image from 'next/image'
/* Components */
import { TimeSvg } from '@/components/atoms/Svg'
import CategoryList from '@/components/presentationals/CategoryList'
import TagList from '@/components/presentationals/TagList'
import TableOfContents from '@/components/presentationals/TableOfContents'
/* Const */
import { BLOG_DETAIL, ARIA_LABEL, TIME_ICON_SIZE } from './const'
/* Styles */
import {
  BlogDetailHeaderWrapper,
  Title,
  DataWrapper,
  TagListWrapper,
  DateWrapper,
  Date,
  ImageWrapper,
  WelcomeMessageWrapper,
  WelcomeMessage,
  WelcomeMessageDescription,
  TableOfContentsWrapper,
} from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

const IMAGE = {
  ALT: 'Thumbnail',
  WIDTH: 844,
  HEIGHT: 474,
} as const

export type TBlogDetailHeader = Pick<
  IBlog,
  | 'title'
  | 'description'
  | 'image'
  | 'publishedAt'
  | 'categories'
  | 'tags'
  | 'tableOfContents'
>

const BlogDetailHeader: FC<TBlogDetailHeader> = ({
  title,
  description,
  image,
  publishedAt,
  categories,
  tags,
  tableOfContents,
}) => {
  return (
    <BlogDetailHeaderWrapper aria-label={ARIA_LABEL.BLOG_DETAIL_HEADER}>
      <Title>{title}</Title>

      <DataWrapper>
        <CategoryList categories={categories} />
        <TagListWrapper>
          <TagList tags={tags} />
        </TagListWrapper>
        <DateWrapper>
          <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
          <Date dateTime={publishedAt}>{publishedAt.slice(0, 10)}</Date>
        </DateWrapper>
      </DataWrapper>

      <ImageWrapper>
        <Image
          src={image.url}
          alt={IMAGE.ALT}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
        />
      </ImageWrapper>
      <WelcomeMessageWrapper>
        <WelcomeMessage>{BLOG_DETAIL.WELCOME_MESSAGE}</WelcomeMessage>
        <WelcomeMessage>{BLOG_DETAIL.THANKS_MESSAGE}</WelcomeMessage>
        <WelcomeMessageDescription>{description}</WelcomeMessageDescription>
      </WelcomeMessageWrapper>

      {tableOfContents.length && (
        <TableOfContentsWrapper>
          <TableOfContents tableOfContents={tableOfContents} />
        </TableOfContentsWrapper>
      )}
    </BlogDetailHeaderWrapper>
  )
}

export default BlogDetailHeader
export * from './const'
