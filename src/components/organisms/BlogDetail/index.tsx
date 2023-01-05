import { FC } from 'react'
/* Components */
import BlogDetailHeader from '@/components/organisms/BlogDetailHeader'
import BlogBody from '@/components/molecules/BlogBody'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
/* Styles */
import { BlogDetailWrapper } from './index.styles'

const BlogDetail: FC = () => {
  const { blog, tableOfContents } = useBlogData()

  if (!blog || !tableOfContents) return null
  return (
    <BlogDetailWrapper aria-label={ARIA_LABEL.BLOG_DETAIL}>
      <BlogDetailHeader
        title={blog.title}
        description={blog.description}
        image={blog.image}
        categories={blog.categories}
        tags={blog.tags}
        publishedAt={
          blog.oldPublishedAt ? blog.oldPublishedAt : blog.publishedAt
        }
        tableOfContents={tableOfContents}
      />
      <BlogBody body={blog.body} />
    </BlogDetailWrapper>
  )
}

export default BlogDetail
export * from './const'
