import { FC } from 'react'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import { CategoryLabelWrapper } from './index.styles'

export const ARIA_LABEL = 'categoryLabel' as const

export interface ICategoryLabel {
  name: string
}

const CategoryLabel: FC<ICategoryLabel> = ({ name }) => {
  const { isSP } = useMediaQuery()

  return (
    <CategoryLabelWrapper isSP={isSP} aria-label={ARIA_LABEL}>
      {name}
    </CategoryLabelWrapper>
  )
}

export default CategoryLabel
