import { FC } from 'react'
/* Features */
import BlogBody from '@/features/blogs/BlogBody'
import BlogDetailHeader from '@/features/blogs/BlogDetailHeader'

export const ARIA_LABEL = 'blogDetail' as const

const BlogDetail: FC = () => {
  return (
    <article className="text-gray-text-t4" aria-label={ARIA_LABEL}>
      <BlogDetailHeader />
      <BlogBody />
    </article>
  )
}

export default BlogDetail
