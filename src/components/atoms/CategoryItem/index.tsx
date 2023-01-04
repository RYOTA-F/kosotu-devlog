import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
/* Styles */
import { CategoryItemWrapper } from './index.styles'
/* Types */
import { IBlogCategory } from '@/types/index'

export const ARIA_LABEL = 'categoryItem' as const

interface ICategoryItemParent {
  id: string
  name: string
}

export interface ICategoryItem {
  category: IBlogCategory | ICategoryItemParent
}

const CategoryItem: FC<ICategoryItem> = ({ category }) => {
  return (
    <CategoryItemWrapper aria-label={ARIA_LABEL}>
      <Link href={`${PAGE.CATEGORY}/${category.id}`}>{category.name}</Link>
    </CategoryItemWrapper>
  )
}

export default CategoryItem
