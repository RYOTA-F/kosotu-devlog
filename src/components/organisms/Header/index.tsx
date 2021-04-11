/**
 * organisms/Header
 * Organisms
 * @package Component
 */
import React from 'react'
/* styles */
import styles from './styles.module.scss'

/**
 * container
 * @param
 * @returns
 */
const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}/>

    </div>
  )
}

export default Header