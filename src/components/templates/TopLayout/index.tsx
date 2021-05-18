/**
 * Templates/TopLayout
 * @package Component
 */
import React from 'react'
/* component */
import BaseLayout from '@/components/organisms/BaseLayout'
import PostList from '@/components/organisms/PostLIst'
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
  return (
    <BaseLayout>
      <div className={styles.container}>
        <div className={styles.postList}>
          <PostList blogList={props.blogList} />
        </div>
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