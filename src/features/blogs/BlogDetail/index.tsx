import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from './const'
/* Features */
import BlogBody from '@/features/blogs/BlogBody'
import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'

const BlogDetail: FC = () => {
  return (
    <article className="text-gray-text-t4" aria-label={ARIA_LABEL}>
      <BlogDetailHeader />
      <BlogBody />
    </article>
  )
}

export default BlogDetail
export * from './const'
