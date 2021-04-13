/**
 * templates/TopLayout
 * Templates
 * @package Component
 */
import React from 'react'
/* component */
import Header from '@/components/organisms/Header'
/* styles*/
import styles from './styles.module.scss'

/**
 * container
 * @param prop
 * @returns
 */
const TopLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.demo}>

        </div>
      </div>
    </>
  )
}

export default TopLayout