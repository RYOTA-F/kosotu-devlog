import { FC } from 'react'
/* Components */
import BlogDetailHeader from '@/components/organisms/BlogDetailHeader'
import BlogBody from '@/components/organisms/BlogBody'
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
