import { FC } from 'react'
import Image from 'next/image'
/* Components */
import { TimeSvg } from '@/components/atoms/Svg'
import CategoryList from '@/components/molecules/CategoryList'
import TagList from '@/components/molecules/TagList'
import TableOfContents from '@/components/molecules/TableOfContents'
/* Const */
import { BLOG_DETAIL, IMAGE, ARIA_LABEL, TIME_ICON_SIZE } from './const'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
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

const BlogDetailHeader: FC = () => {
  const { blog } = useBlogData()
  const { tableOfContents } = useCommonData()

  if (!blog) return null
  return (
    <BlogDetailHeaderWrapper aria-label={ARIA_LABEL.BLOG_DETAIL_HEADER}>
      <Title>{blog.title}</Title>

      <DataWrapper>
        <CategoryList categories={blog.categories} />
        <TagListWrapper>
          <TagList tags={blog.tags} />
        </TagListWrapper>
        <DateWrapper>
          <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
          <Date
            dateTime={
              blog.oldPublishedAt ? blog.oldPublishedAt : blog.publishedAt
            }
          >
            {blog.oldPublishedAt
              ? blog.oldPublishedAt.slice(0, 10)
              : blog.publishedAt.slice(0, 10)}
          </Date>
        </DateWrapper>
      </DataWrapper>

      <ImageWrapper>
        <Image
          src={blog.image.url}
          alt={IMAGE.ALT}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
        />
      </ImageWrapper>
      <WelcomeMessageWrapper>
        <WelcomeMessage>{BLOG_DETAIL.WELCOME_MESSAGE}</WelcomeMessage>
        <WelcomeMessage>{BLOG_DETAIL.THANKS_MESSAGE}</WelcomeMessage>
        <WelcomeMessageDescription>
          {blog.description}
        </WelcomeMessageDescription>
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
