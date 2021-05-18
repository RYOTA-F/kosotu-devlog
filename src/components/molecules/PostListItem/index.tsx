/**
* Molecules/PostListItem
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import CategoryItem from '@/components/atoms/CategoryItem'
/* types */
import { CategoryType } from '@/types/category'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type PostListItemParams = {
  id: string
  title: string
  discription: string
  thumbmail_url: string
  categories: CategoryType[]
  created_time: string
}

/**
 * @param props PostListItemParams
 * @returns
 */
const PostListItem: React.FC<PostListItemParams> = (props: PostListItemParams) => {
  let category_area

  if (props.categories ) {
    category_area = (
      props.categories.map(v =>
        <div key={v.id} className={styles.content__categoryItem}>
          <CategoryItem id={v.id} name={v.name} />
        </div>
      )
    )
  } 
  
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.thumbnail__pic}
          src={props.thumbmail_url}
          alt="Thumbnail Picture"
          layout={"fixed"}
          width={330}
          height={180}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.content__title}>{props.title}</h3>
        <div className={styles.content__discription}>{props.discription}</div>
        <div className={styles.content__category}>
          {category_area}
        </div>
        <div className={styles.content__time}>{props.created_time}</div>
      </div>
    </div>
  )
}

export default PostListItem