import { FC } from 'react'
import 'highlight.js/styles/base16/onedark.css'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'

const BlogBody: FC = () => {
  const { blog } = useBlogData()

  if (!blog) return null
  return (
    <div
      className="blogBody"
      dangerouslySetInnerHTML={{ __html: blog.body }}
      aria-label={ARIA_LABEL}
    />
  )
}

export default BlogBody
export * from './const'
