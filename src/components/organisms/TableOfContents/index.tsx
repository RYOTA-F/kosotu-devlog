/**
* Organisms/TableOfContents
* @package Component
*/
import React from 'react'
/* components */
/* constants */
import { TABLE_OF_CONTENTS } from '@/constants/test'
/* types */
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type TProps = {
}

/**
 * @param props TProps
 * @returns
 */
const TableOfContents: React.FC = () => {
  return (
    <div className={styles.container}>
      <h4>目次</h4>
    </div>
  )
}

export default TableOfContents