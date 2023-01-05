import { FC } from 'react'
import 'highlight.js/styles/base16/edge-dark.css'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { BlogBodyWrapper } from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

export type IBlogBody = Pick<IBlog, 'body'>

const BlogBody: FC<IBlogBody> = ({ body }) => {
  return (
    <BlogBodyWrapper
      dangerouslySetInnerHTML={{ __html: body }}
      aria-label={ARIA_LABEL}
    />
  )
}

export default BlogBody
export * from './const'
