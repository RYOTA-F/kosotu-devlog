import { FC } from 'react'
/* Components */
import BlogDetailHeader from '@/components/presentationals/BlogDetailHeader'
import BlogBody from '@/components/presentationals/BlogBody'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { BlogDetailWrapper } from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

const BlogDetail: FC<IBlog> = ({
  title,
  description,
  body,
  image,
  // publishedAt,
  // categories,
}) => {
  return (
    <BlogDetailWrapper aria-label={ARIA_LABEL.BLOG_DETAIL}>
      <BlogDetailHeader title={title} description={description} image={image} />
      <BlogBody body={body} />
    </BlogDetailWrapper>
  )
}

export default BlogDetail
export * from './const'
