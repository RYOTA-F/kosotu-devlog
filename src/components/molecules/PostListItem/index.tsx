/**
* Molecules/PostListItem
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import CategoryItem from '@/components/atoms/CategoryItem'
/* types */
import { CategoryItemProps } from '@/components/atoms/CategoryItem'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type PostListItemParams = {
  id: number
  title: string
  discription: string
  thumbmail_url: string
  categories: CategoryItemProps[]
  created_time: string
}

/**
 * @param props PostListItemParams
 * @returns
 */
const PostListItem: React.FC<PostListItemParams> = (props: PostListItemParams) => {
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
          {props.categories.map(v =>
            <div key={v.id} className={styles.content__categoryItem}>
              <CategoryItem id={v.id} name={v.name} />
            </div>
          )}
        </div>
        <div className={styles.content__time}>{props.created_time}</div>
      </div>
    </div>
  )
}

export default PostListItem