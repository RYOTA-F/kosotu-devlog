/**
* Organisms/PostList
* @package Component
*/
import React from 'react'
/* components */
import PostListItem from '@/components/molecules/PostListItem'
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type PostListType = {
  blogList: BlogItemType[]
}

/**
 * @param props PostList
 * @returns
 */
const PostList: React.FC<PostListType> = (props: PostListType) => {
  return (
    <div className={styles.container}>
      {props.blogList.map(v =>
        <PostListItem
          key={v.id}
          id={v.id}
          title={v.title}
          discription={v.description}
          image={v.image}
          categories={v.categories}
          created_time={v.createdAt}
        />
      )}
    </div>
  )
}

export default PostList