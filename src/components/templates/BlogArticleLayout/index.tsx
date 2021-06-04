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
/* constants */
/* types */
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { CategoryType } from '@/types/category'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type BlogArticleLayoutProps = {
  blogItem: BlogItemType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  categories: CategoryType[]
}

/**
 * @param props TProps
 * @returns
 */
const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = (props: BlogArticleLayoutProps) => {
  const { blogItem, highlightedBody, tableOfContents, categories } = props
  console.log(blogItem, highlightedBody, tableOfContents, categories)
  
  return (
    <BaseLayout>
      <div className={styles.container}>
        <article className={styles.postItem}>
          <div>BlogArticle</div>
          {/* <BlogArticle blogItem={blogItem} highlightedBody={highlightedBody} tableOfContents={tableOfContents} /> */}
        </article>
        <div className={styles.sideBar}>
          <SideProfile />
          <div className={styles.sideBar__item}>
            <div>サイドカテゴリー</div>
            {/* <SideCategories categories={categories} /> */}
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default BlogArticleLayout