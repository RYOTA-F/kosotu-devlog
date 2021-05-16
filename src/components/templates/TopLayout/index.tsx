/**
 * Templates/TopLayout
 * @package Component
 */
import React from 'react'
/* component */
import BaseLayout from '@/components/organisms/BaseLayout'
import SideProfile from '@/components/organisms/SideProfile'
import SideCategories from '@/components/organisms/SideCategories'
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
      </div>
    </BaseLayout>
  )
}

export default TopLayout