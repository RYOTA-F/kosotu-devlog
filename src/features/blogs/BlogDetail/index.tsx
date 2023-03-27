import { FC } from 'react'
/* Features */
import BlogBody from '@/features/blogs/BlogBody'
import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'
/* Const */
import { ARIA_LABEL } from './const'

const BlogDetail: FC = () => {
  return (
    <article className="text-gray-text-t4" aria-label={ARIA_LABEL.BLOG_DETAIL}>
      <BlogDetailHeader />
      <BlogBody />
    </article>
  )
}

export default BlogDetail
export * from './const'
