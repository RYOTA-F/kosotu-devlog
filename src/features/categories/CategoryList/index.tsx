import { FC } from 'react'
/* Components */
import { FolderSvg } from '@/components/Elements/Svg'
/* Features */
import CategoryItem from '@/features/categories/CategoryItem'
/* Const */
import { COLOR } from '@/const/index'
import { ARIA_LABEL, SVG_SIZE } from './const'
/* Types */
import { ICategory } from '@/types/index'

export interface ICategoryList {
  categories: ICategory[]
}

const CategoryList: FC<ICategoryList> = ({ categories }) => {
  return (
    <ul className="flex items-center" aria-label={ARIA_LABEL}>
      <div className="mr-2 mb-2">
        <FolderSvg
          height={SVG_SIZE}
          width={SVG_SIZE}
          color={COLOR.BLUE_GROUP.MAIN}
          fill={COLOR.BLUE_GROUP.MAIN}
        />
      </div>
      {categories.map((v) => (
        <li key={v.id} className="[&:not(:first-of-type)]:ml-2">
          <CategoryItem category={v} />
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
export * from './const'
