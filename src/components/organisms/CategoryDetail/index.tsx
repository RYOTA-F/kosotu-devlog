import { FC } from 'react'
/* Components */
import CategoryDetailHeader from '@/components/organisms/CategoryDetailHeader'
import BlogCardList from '@/features/blogs/BlogCardList'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { CategoryDetailWrapper, BlogCardListWrapper } from './index.styles'

const CategoryDetail: FC = () => {
  return (
    <CategoryDetailWrapper aria-label={ARIA_LABEL.CATEGORY_DETAIL}>
      <CategoryDetailHeader />
      <BlogCardListWrapper>
        <BlogCardList />
      </BlogCardListWrapper>
    </CategoryDetailWrapper>
  )
}

export default CategoryDetail
export * from './const'
