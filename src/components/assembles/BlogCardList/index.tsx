import { FC } from 'react'
/* Components */
import BlogCard from '@/components/presentationals/BlogCard'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import {
  BlogCardListWrapper,
  BlogCardItems,
  BlogCardWrapper,
} from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

export interface IBlogCardList {
  blogList: IBlog[]
}

const BlogCardList: FC<IBlogCardList> = ({ blogList }) => {
  return (
    <BlogCardListWrapper aria-label={ARIA_LABEL.BLOG_CARD_LIST}>
      <BlogCardItems>
        {blogList.map((v) => (
          <BlogCardWrapper key={v.title}>
            <BlogCard
              title={v.title}
              url={v.url}
              thumbnail={v.thumbnail}
              publishedAt={v.publishedAt}
            />
          </BlogCardWrapper>
        ))}
      </BlogCardItems>
    </BlogCardListWrapper>
  )
}

export default BlogCardList
export * from './const'
