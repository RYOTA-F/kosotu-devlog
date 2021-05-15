/**
 * Templates/TopLayout
 * @package Component
 */
import React from 'react'
/* component */
import BaseLayout from '@/components/organisms/BaseLayout'
import SideProfile from '@/components/organisms/SideProfile'
/* constants */
/* types */
/* styles */
import styles from './styles.module.scss'

/**
 * container
 * @param prop
 * @returns
 */
const TopLayout: React.FC = () => {
  return (
    <BaseLayout>
      <div className={styles.sideBar}>
        <SideProfile />
      </div>
    </BaseLayout>
  )
}

export default TopLayout