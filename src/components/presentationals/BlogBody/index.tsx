import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { BlogBodyWrapper } from './index.styles'

export interface IBlogBody {
  body: string
}

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
