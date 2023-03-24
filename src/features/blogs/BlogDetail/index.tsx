import { FC } from 'react'
/* Components */
import BlogBody from '@/features/blogs/BlogBody'
import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { BlogDetailWrapper } from './index.styles'

const BlogDetail: FC = () => {
  return (
    <BlogDetailWrapper aria-label={ARIA_LABEL.BLOG_DETAIL}>
      <BlogDetailHeader />
      <BlogBody />
    </BlogDetailWrapper>
  )
}

export default BlogDetail
export * from './const'
