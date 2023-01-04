import { FC } from 'react'
/* Components */
import CategoryDetailHeader from '@/components/assembles/CategoryDetailHeader'
import BlogCardList from '@/components/assembles/BlogCardList'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { CategoryDetailWrapper, BlogCardListWrapper } from './index.styles'
/* Types */
import { ICategory } from '@/types/microCMS/category'

export type TCategoryDetail = Pick<ICategory, 'name' | 'parent' | 'blogs'>

const CategoryDetail: FC<TCategoryDetail> = ({ name, parent, blogs }) => {
  return (
    <CategoryDetailWrapper aria-label={ARIA_LABEL.CATEGORY_DETAIL}>
      <CategoryDetailHeader name={name} parent={parent} />
      <BlogCardListWrapper>
        <BlogCardList contents={blogs} />
      </BlogCardListWrapper>
    </CategoryDetailWrapper>
  )
}

export default CategoryDetail
export * from './const'
