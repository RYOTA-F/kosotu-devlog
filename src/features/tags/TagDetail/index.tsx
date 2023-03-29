import { FC } from 'react'
/* Components */
import TagDetailHeader from '@/features/tags/TagDetailHeader'
import BlogCardList from '@/features/blogs/BlogCardList'
/* Const */
import { ARIA_LABEL } from './const'

const TagDetail: FC = () => {
  return (
    <section aria-label={ARIA_LABEL.TAG_DETAIL}>
      <TagDetailHeader />
      <div className="mt-10">
        <BlogCardList />
      </div>
    </section>
  )
}

export default TagDetail
export * from './const'
