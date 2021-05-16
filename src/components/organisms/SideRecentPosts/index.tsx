/**
* Organisms/SideRecentPosts
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
const SideRecentPosts: React.FC = () => {
  const recent_posts = [
    {
      title: '投稿1',
      link: 'posts1'
    },
    {
      title: '投稿2',
      link: 'posts2'
    }
  ]

  return (
    <>
      <div className={styles.listTitle}>最近の投稿</div>
      { recent_posts.map((v, i) =>
        <div key={i} className={styles.linkItem}>
          <PostLinkItem title={v.title} link={v.link} />
        </div>
      )}
    </>
  )
}

export default SideRecentPosts