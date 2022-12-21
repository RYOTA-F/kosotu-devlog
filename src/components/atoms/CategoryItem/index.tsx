import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
/* Styles */
import { CategoryItemWrapper } from './index.styles'
/* Types */
import { IBlogCaterory } from '@/types/index'

export const ARIA_LABEL = 'categoryItem'

const CategoryItem: FC<IBlogCaterory> = ({ id, name }) => {
  return (
    <CategoryItemWrapper aria-label={ARIA_LABEL}>
      <Link href={`${PAGE.CATEGORIES}/${id}`}>{name}</Link>
    </CategoryItemWrapper>
  )
}

export default CategoryItem
