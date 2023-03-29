import { FC } from 'react'
/* Components */
import TagItem from '@/features/tags/TagItem'
import { TagSvg } from '@/components/Elements/Svg'
/* Const */
import { COLOR } from '@/const/index'
import { ARIA_LABEL, SVG_SIZE } from './const'
/* Types */
import { ITag } from '@/types/index'

export interface ITagList {
  tags: ITag[]
}

const TagList: FC<ITagList> = ({ tags }) => (
  <ul className="flex items-center" aria-label={ARIA_LABEL}>
    <div className="mr-2 mb-1">
      <TagSvg
        height={SVG_SIZE}
        width={SVG_SIZE}
        color={COLOR.GRAY_SCALE.GRAY.TEXT_1}
      />
    </div>
    {tags.map((v) => (
      <li key={v.id} className="[&:not(:first-of-type)]:ml-2">
        <TagItem tag={v} />
      </li>
    ))}
  </ul>
)

export default TagList
export * from './const'
