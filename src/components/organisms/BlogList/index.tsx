/**
* Organisms/BlogList
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
type BlogListType = {
  blogList: BlogItemType[]
}

/**
 * @param props BlogList
 * @returns
 */
const BlogList: React.FC<BlogListType> = (props: BlogListType) => {
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

export default BlogList