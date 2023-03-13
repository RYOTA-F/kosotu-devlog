import { FC } from 'react'
/* Components */
import TagDetailHeader from '@/components/organisms/TagDetailHeader'
import BlogCardList from '@/components/organisms/BlogCardList'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { TagDetailWrapper, BlogCardListWrapper } from './index.styles'

const TagDetail: FC = () => {
  return (
    <TagDetailWrapper aria-label={ARIA_LABEL.TAG_DETAIL}>
      <TagDetailHeader />
      <BlogCardListWrapper>
        <BlogCardList blogs={[]} />
      </BlogCardListWrapper>
    </TagDetailWrapper>
  )
}

export default TagDetail
export * from './const'
