/**
 * Templates/TopLayout
 * @package Component
 */
import React from 'react'
/* component */
import BaseLayout from '@/components/organisms/BaseLayout'
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
      <div className={styles.sideBar}>
        <SideProfile />
        <SideCategories />
        <SideRecentPosts />
      </div>
    </BaseLayout>
  )
}

export default TopLayout