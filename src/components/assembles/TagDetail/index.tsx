import { FC } from 'react'
/* Components */
import TagDetailHeader from '@/components/assembles/TagDetailHeader'
import BlogCardList from '@/components/assembles/BlogCardList'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { TagDetailWrapper, BlogCardListWrapper } from './index.styles'
/* Types */
import { ITag } from '@/types/index'

export type TTagDetail = Pick<ITag, 'name' | 'blogs'>

const TagDetail: FC<TTagDetail> = ({ name, blogs }) => {
  return (
    <TagDetailWrapper aria-label={ARIA_LABEL.TAG_DETAIL}>
      <TagDetailHeader name={name} />
      <BlogCardListWrapper>
        <BlogCardList contents={blogs} />
      </BlogCardListWrapper>
    </TagDetailWrapper>
  )
}

export default TagDetail
export * from './const'
