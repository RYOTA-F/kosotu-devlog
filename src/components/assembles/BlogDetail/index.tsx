import { FC } from 'react'
/* Components */
import BlogDetailHeader from '@/components/presentationals/BlogDetailHeader'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { BlogDetailWrapper } from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

const BlogDetail: FC<IBlog> = ({
  title,
  description,
  // body,
  image,
  // publishedAt,
  // categories,
}) => {
  return (
    <BlogDetailWrapper aria-label={ARIA_LABEL.BLOG_DETAIL}>
      <BlogDetailHeader title={title} description={description} image={image} />
    </BlogDetailWrapper>
  )
}

export default BlogDetail
export * from './const'
