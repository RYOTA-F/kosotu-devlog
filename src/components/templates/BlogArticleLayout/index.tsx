/**
* Templates/BlogArticleLayout
* @package Component
*/
import React from 'react'
/* components */
import BaseLayout from '@/components/organisms/BaseLayout'
/* constants */
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */

/**
 * props
 */
type BlogArticleLayoutProps = {
  blogItem: BlogItemType
}

/**
 * @param props TProps
 * @returns
 */
const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = (props: BlogArticleLayoutProps) => {
  return (
    <BaseLayout>
      <div>投稿ページ</div>
    </BaseLayout>
  )
}

export default BlogArticleLayout