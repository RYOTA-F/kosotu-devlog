/**
* Organisms/SideCategories
* @package Component
*/
import React from 'react'
/* components */
import PostLinkItem from '@/components/molecules/PostLinkItem'
/* styles */
import styles from './styles.module.scss'

/**
 * @param none
 * @returns
 */
const SideCategories: React.FC = () => {
  const categories = [
    {
      title: 'カテゴリー1',
      link: 'category1'
    },
    {
      title: 'カテゴリー2',
      link: 'category2'
    }
  ]

  return (
    <>
      <div className={styles.listTitle}>カテゴリー</div>
      { categories.map((v, i) =>
        <div key={i} className={styles.linkItem}>
          <PostLinkItem title={v.title} link={v.link} />
        </div>
      )}
    </>
  )
}

export default SideCategories