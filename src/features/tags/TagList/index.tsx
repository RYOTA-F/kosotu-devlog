import { FC } from 'react'
/* Components */
import TagItem from '@/features/tags/TagItem'
import { TagSvg } from '@/components/atoms/Svg'
/* Const */
import { COLOR } from '@/const/index'

/* Styles */
import { TagListWrapper, TagSvgWrapper, TagItemWrapper } from './index.styles'
/* Types */
import { ITag } from '@/types/index'

export const ARIA_LABEL = 'tagList' as const
export const SVG_SIZE = 16 as const

export interface ITagList {
  tags: ITag[]
}

const TagList: FC<ITagList> = ({ tags }) => {
  return (
    <TagListWrapper aria-label={ARIA_LABEL}>
      <TagSvgWrapper>
        <TagSvg
          height={SVG_SIZE}
          width={SVG_SIZE}
          color={COLOR.GRAY_SCALE.GRAY.TEXT_1}
        />
      </TagSvgWrapper>
      {tags.map((v) => (
        <TagItemWrapper key={v.id}>
          <TagItem tag={v} />
        </TagItemWrapper>
      ))}
    </TagListWrapper>
  )
}

export default TagList
