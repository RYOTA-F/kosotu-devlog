import { FC } from 'react'
import CategoryItem from '@/components/atoms/CategoryItem'
/* Styles */
import { CategoryListWrapper, CategoryItemWrapper } from './index.styles'
/* Types */
import { IBlogCaterory } from '@/types/index'

export const ARIA_LABEL = 'categoryList' as const

export interface ICategoryList {
  categories: IBlogCaterory[]
}

const CategoryList: FC<ICategoryList> = ({ categories }) => {
  return (
    <CategoryListWrapper aria-label={ARIA_LABEL}>
      {categories.map((v) => (
        <CategoryItemWrapper key={v.id}>
          <CategoryItem category={v} />
        </CategoryItemWrapper>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
