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
import useMediaQuery from '@/hooks/useMediaQuery'
/* Libs */
import { formatDate } from '@/libs/dayjs'
/* Styles */
import {
  BlogDetailHeaderWrapper,
  Title,
  DataWrapper,
  CategoryListWrapper,
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
  const { isSP } = useMediaQuery()

  if (!blog) return null
  return (
    <BlogDetailHeaderWrapper aria-label={ARIA_LABEL.BLOG_DETAIL_HEADER}>
      <Title isSP={isSP}>{blog.title}</Title>

      <DataWrapper isSP={isSP}>
        <CategoryListWrapper>
          <CategoryList categories={[blog.categories[0]]} />
        </CategoryListWrapper>
        <TagListWrapper isSP={isSP}>
          <TagList tags={blog.tags} />
        </TagListWrapper>
        <DateWrapper isSP={isSP}>
          <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
          <Date
            dateTime={
              blog.oldPublishedAt
                ? formatDate(blog.oldPublishedAt)
                : formatDate(blog.publishedAt)
            }
            isSP={isSP}
          >
            {blog.oldPublishedAt
              ? formatDate(blog.oldPublishedAt)
              : formatDate(blog.publishedAt)}
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
        <TableOfContentsWrapper isSP={isSP}>
          <TableOfContents tableOfContents={tableOfContents} />
        </TableOfContentsWrapper>
      )}
    </BlogDetailHeaderWrapper>
  )
}

export default BlogDetailHeader
export * from './const'
