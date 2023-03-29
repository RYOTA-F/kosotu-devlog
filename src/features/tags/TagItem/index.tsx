import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
import { ARIA_LABEL } from './const'
/* Types */
import { ITag } from '@/types/index'

export interface ITagItem {
  tag: ITag
}

const TagItem: FC<ITagItem> = ({ tag }) => (
  <div
    className="inline-block cursor-pointer overflow-hidden bg-gray-footer border-transparent rounded-md border-[1px] box-border transition duration-400 text-[14px] sp:text-[10px] hover:bg-white hover:border-gray-footer"
    aria-label={ARIA_LABEL}
  >
    <Link
      href={`${PAGE.TAG}${tag.id}`}
      className="block py-1 px-2 text-white hover:text-gray-footer"
    >
      {tag.name}
    </Link>
  </div>
)

export default TagItem
export * from './const'
