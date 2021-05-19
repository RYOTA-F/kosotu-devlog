/**
* Atoms/CategoryItem
* @package Component
*/
import React from 'react'
/* components */
/* constants */
/* types */
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type CategoryItemProps = {
  // id: string
  name: string
}

/**
 * @param props CategoryItemProps
 * @returns
 */
const CategoryItem: React.FC<CategoryItemProps> = (props: CategoryItemProps) => {
  return (
    <div className={styles.container}>
      {props.name}
    </div>
  )
}

export default CategoryItem