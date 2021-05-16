/**
* Organisms/AllowRightIcon
* @package Component
*/
import React from 'react'
/* styles */
import styles from './styles.module.scss'

/**
 * @param none
 * @returns
 */
const AllowRightIcon: React.FC = () => {
  return (
    <div className={styles.allowRight}>{'>'}</div>
  )
}

export default AllowRightIcon