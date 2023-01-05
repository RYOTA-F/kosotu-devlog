import { FC } from 'react'
/* Components */
import CategoryDetailHeader from '@/components/organisms/CategoryDetailHeader'
import BlogCardList from '@/components/organisms/BlogCardList'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { CategoryDetailWrapper, BlogCardListWrapper } from './index.styles'
/* Types */
import { ICategory } from '@/types/microCMS/category'

export type TCategoryDetail = Pick<ICategory, 'name' | 'relation' | 'blogs'>

const CategoryDetail: FC<TCategoryDetail> = ({ name, relation }) => {
  return (
    <CategoryDetailWrapper aria-label={ARIA_LABEL.CATEGORY_DETAIL}>
      <CategoryDetailHeader name={name} relation={relation} />
      <BlogCardListWrapper>
        <BlogCardList />
      </BlogCardListWrapper>
    </CategoryDetailWrapper>
  )
}

export default CategoryDetail
export * from './const'
