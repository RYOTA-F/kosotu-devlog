import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
/* Styles */
import { GagItemWrapper } from './index.styles'
/* Types */
import { IBlogTag } from '@/types/index'

export const ARIA_LABEL = 'tagItem' as const

export interface ITagItem {
  tag: IBlogTag
}

const TagItem: FC<ITagItem> = ({ tag }) => {
  return (
    <GagItemWrapper aria-label={ARIA_LABEL}>
      <Link href={`${PAGE.TAG}/${tag.id}`}>{tag.name}</Link>
    </GagItemWrapper>
  )
}

export default TagItem
