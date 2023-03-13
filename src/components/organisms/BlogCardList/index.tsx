import { FC } from 'react'
/* Components */
import BlogCard from '@/components/molecules/BlogCard'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
// import useBlogData from '@/hooks/useBlogData'
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import {
  BlogCardListWrapper,
  BlogCardItems,
  BlogCardWrapper,
} from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

export interface IBlogCardList {
  blogs: IBlog[]
}

const BlogCardList: FC<IBlogCardList> = ({ blogs }) => {
  // const { blogs } = useBlogData()
  const { isSP } = useMediaQuery()

  return (
    <BlogCardListWrapper aria-label={ARIA_LABEL.BLOG_CARD_LIST}>
      <BlogCardItems isSP={isSP}>
        {blogs.map((v) => (
          <BlogCardWrapper key={v.title} isSP={isSP}>
            <BlogCard
              title={v.title}
              id={v.id}
              image={v.image}
              publishedAt={v.oldPublishedAt ? v.oldPublishedAt : v.publishedAt}
            />
          </BlogCardWrapper>
        ))}
      </BlogCardItems>
    </BlogCardListWrapper>
  )
}

export default BlogCardList
export * from './const'
