/**
* Templates/BlogArticleLayout
* @package Component
*/
import React from 'react'
/* components */
import BaseLayout from '@/components/organisms/BaseLayout'
import BlogArticle from '@/components/organisms/BlogArticle'
import SideProfile from '@/components/organisms/SideProfile'
import SideCategories from '@/components/organisms/SideCategories'
import SideRecentPosts from '@/components/organisms/SideRecentPosts'
/* constants */
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

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
  const { blogItem } = props
  
  return (
    <BaseLayout>
      <div className={styles.container}>
        <article className={styles.postItem}>
          <BlogArticle blogItem={blogItem} />
        </article>
        <div className={styles.sideBar}>
          <SideProfile />
          <div className={styles.sideBar__item}>
            <SideCategories />
          </div>
          <div className={styles.sideBar__item}>
            <SideRecentPosts />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default BlogArticleLayout