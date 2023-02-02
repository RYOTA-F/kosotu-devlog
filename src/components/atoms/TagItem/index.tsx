import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import { TagItemWrapper } from './index.styles'
/* Types */
import { ITag } from '@/types/index'

export const ARIA_LABEL = 'tagItem' as const

export interface ITagItem {
  tag: ITag
}

const TagItem: FC<ITagItem> = ({ tag }) => {
  const { isSP } = useMediaQuery()

  return (
    <TagItemWrapper isSP={isSP} aria-label={ARIA_LABEL}>
      <Link href={`${PAGE.TAG}${tag.id}`}>{tag.name}</Link>
    </TagItemWrapper>
  )
}

export default TagItem
