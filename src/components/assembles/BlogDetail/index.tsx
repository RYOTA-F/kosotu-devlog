import { FC } from 'react'
/* Components */
import BlogDetailHeader from '@/components/assembles/BlogDetailHeader'
import BlogBody from '@/components/presentationals/BlogBody'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
/* Styles */
import { BlogDetailWrapper } from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

export type TBlogDetail = Omit<IBlog, 'breadCrumb'>

const BlogDetail: FC<TBlogDetail> = ({ tableOfContents }) => {
  const { blog } = useBlogData()

  if (!blog) return null
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
