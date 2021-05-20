/**
 * Templates/TopLayout
 * @package Component
 */
import React from 'react'
/* component */
import BaseLayout from '@/components/organisms/BaseLayout'
import BlogList from '@/components/organisms/BlogList'
import SideProfile from '@/components/organisms/SideProfile'
import SideCategories from '@/components/organisms/SideCategories'
import SideRecentPosts from '@/components/organisms/SideRecentPosts'
/* types */
import {BlogItemType} from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type TopLayoutProps = {
  blogList: BlogItemType[]
}

/**
 * container
 * @param none
 * @returns
 */
const TopLayout: React.FC<TopLayoutProps> = (props: TopLayoutProps) => {
  const { blogList } = props
  
  return (
    <BaseLayout>
      <div className={styles.container}>
        <article className={styles.postList}>
          <BlogList blogList={blogList} />
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

export default TopLayout