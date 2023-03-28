import { FC } from 'react'
import 'highlight.js/styles/base16/onedark.css'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'

export const ARIA_LABEL = 'blogBody' as const

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
