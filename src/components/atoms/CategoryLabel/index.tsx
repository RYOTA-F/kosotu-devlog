import { FC } from 'react'
/* Styles */
import { CategoryLabelWrapper } from './index.styles'

export const ARIA_LABEL = 'categoryLabel' as const

export interface ICategoryLabel {
  name: string
}

const CategoryLabel: FC<ICategoryLabel> = ({ name }) => {
  return (
    <CategoryLabelWrapper aria-label={ARIA_LABEL}>{name}</CategoryLabelWrapper>
  )
}

export default CategoryLabel
