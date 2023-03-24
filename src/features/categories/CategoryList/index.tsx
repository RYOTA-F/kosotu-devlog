import { FC } from 'react'
/* Components */
import CategoryItem from '@/features/categories/CategoryItem'
import { FolderSvg } from '@/components/Elements/Svg'
/* Const */
import { COLOR } from '@/const/index'
/* Styles */
import {
  CategoryListWrapper,
  FolderSvgWrapper,
  CategoryItemWrapper,
} from './index.styles'
/* Types */
import { ICategory } from '@/types/index'

export const ARIA_LABEL = 'categoryList' as const
export const SVG_SIZE = 16 as const

export interface ICategoryList {
  categories: ICategory[]
}

const CategoryList: FC<ICategoryList> = ({ categories }) => {
  return (
    <CategoryListWrapper aria-label={ARIA_LABEL}>
      <FolderSvgWrapper>
        <FolderSvg
          height={SVG_SIZE}
          width={SVG_SIZE}
          color={COLOR.BLUE_GROUP.MAIN}
          fill={COLOR.BLUE_GROUP.MAIN}
        />
      </FolderSvgWrapper>
      {categories.map((v) => (
        <CategoryItemWrapper key={v.id}>
          <CategoryItem category={v} />
        </CategoryItemWrapper>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
