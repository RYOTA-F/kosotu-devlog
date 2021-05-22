/**
* Organisms/SideCategories
* @package Component
*/
import React from 'react'
/* components */
import PostLinkItem from '@/components/molecules/PostLinkItem'
/* types */
import { CategoryType } from '@/types/category'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type SideCategoriesProps = {
  categories: CategoryType[]
}

/**
 * @param none
 * @returns
 */
const SideCategories: React.FC<SideCategoriesProps> = (props: SideCategoriesProps) => {
  const { categories } = props

  return (
    <>
      <div className={styles.listTitle}>カテゴリー</div>
      { categories.map((v, i) =>
        <div key={i} className={styles.linkItem}>
          <PostLinkItem title={v.name} link={v.id} />
        </div>
      )}
    </>
  )
}

export default SideCategories