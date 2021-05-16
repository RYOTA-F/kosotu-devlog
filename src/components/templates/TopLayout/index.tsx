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
/* styles */
import styles from './styles.module.scss'

/**
 * container
 * @param none
 * @returns
 */
const TopLayout: React.FC = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <div className={styles.postList}>
          <PostList />
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