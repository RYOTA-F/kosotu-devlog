import { FC } from 'react'
/* Components */
import BlogCard from '@/components/presentationals/BlogCard'
/* Const */
import { PAGE } from '@/const/index'
import { ARIA_LABEL } from './const'
/* Styles */
import {
  BlogCardListWrapper,
  BlogCardItems,
  BlogCardWrapper,
} from './index.styles'
/* Types */
import { TBlogDetailApiResponseContents } from '@/types/index'

export interface IBlogCardList {
  contents: TBlogDetailApiResponseContents[]
}

const BlogCardList: FC<IBlogCardList> = ({ contents }) => {
  return (
    <BlogCardListWrapper aria-label={ARIA_LABEL.BLOG_CARD_LIST}>
      <BlogCardItems>
        {contents.map((v) => (
          <BlogCardWrapper key={v.title}>
            <BlogCard
              title={v.title}
              url={`${PAGE.BLOGS}/${v.id}`}
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
