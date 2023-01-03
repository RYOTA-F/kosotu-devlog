import { FC } from 'react'
import TagItem from '@/components/atoms/TagItem'
/* Styles */
import { TagListWrapper, TagItemWrapper } from './index.styles'
/* Types */
import { IBlogTag } from '@/types/index'

export const ARIA_LABEL = 'tagList' as const

export interface ITagList {
  tags: IBlogTag[]
}

const TagList: FC<ITagList> = ({ tags }) => {
  return (
    <TagListWrapper aria-label={ARIA_LABEL}>
      {tags.map((v) => (
        <TagItemWrapper key={v.id}>
          <TagItem tag={v} />
        </TagItemWrapper>
      ))}
    </TagListWrapper>
  )
}

export default TagList
