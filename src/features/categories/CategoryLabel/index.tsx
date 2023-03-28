import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from './const'

export interface ICategoryLabel {
  name: string
}

const CategoryLabel: FC<ICategoryLabel> = ({ name }) => (
  <div
    className="inline-block py-1 px-2 text-blue-main bg-white border-blue-main rounded-md border-[1px] box-border text-[14px] sp:text-[10px]"
    aria-label={ARIA_LABEL}
  >
    {name}
  </div>
)

export default CategoryLabel
export * from './const'
