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
  contents: IBlog[]
}

const BlogCardList: FC<IBlogCardList> = ({ contents }) => {
  return (
    <BlogCardListWrapper aria-label={ARIA_LABEL.BLOG_CARD_LIST}>
      <BlogCardItems>
        {contents.map((v) => (
          <BlogCardWrapper key={v.title}>
            <BlogCard
              title={v.title}
              url={`/${v.id}`}
              image={v.image}
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
