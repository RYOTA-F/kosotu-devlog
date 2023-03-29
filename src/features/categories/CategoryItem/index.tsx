import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
import { ARIA_LABEL } from './const'
/* Types */
import { ICategory } from '@/types/index'

interface ICategoryItemParent {
  id: string
  name: string
}

export interface ICategoryItem {
  category: ICategory | ICategoryItemParent
}

const CategoryItem: FC<ICategoryItem> = ({ category }) => (
  <div
    className="inline-block cursor-pointer overflow-hidden bg-blue-main border-transparent rounded-md border-[1px] box-border transition duration-400 text-[14px] sp:text-[10px] hover:bg-white hover:border-blue-main"
    aria-label={ARIA_LABEL}
  >
    <Link
      href={`${PAGE.CATEGORY}${category.id}`}
      className="block py-1 px-2 text-white hover:text-blue-main"
    >
      {category.name}
    </Link>
  </div>
)

export default CategoryItem
export * from './const'
