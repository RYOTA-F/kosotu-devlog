/**
* Organisms/PostList
* @package Component
*/
import React from 'react'
/* components */
import PostListItem from '@/components/molecules/PostListItem'
/* constants */
/* types */
/* styles */
import styles from './styles.module.scss'

/**
 * @param props PostList
 * @returns
 */
const PostList: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'テスト投稿1',
      discription: 'これは投稿1です。',
      thumbnail_url: '/400x400.png',
      categories: [
        {id:1, name: 'カテゴリー1'},
        {id:2, name: 'カテゴリー2'},
      ],
      created_time: '2021.5.16'
    },
    {
      id: 2,
      title: 'テスト投稿2',
      discription: 'これは投稿2です。',
      thumbnail_url: '/400x400.png',
      categories: [
        {id:1, name: 'カテゴリー1'},
        {id:2, name: 'カテゴリー2'},
      ],
      created_time: '2021.5.17'
    }
  ]

  return (
    <div className={styles.container}>
      {posts.map(v =>
        <PostListItem
          key={v.id}
          id={v.id}
          title={v.title}
          discription={v.discription}
          thumbmail_url={v.thumbnail_url}
          categories={v.categories}
          created_time={v.created_time}
        />
      )}
    </div>
  )
}

export default PostList