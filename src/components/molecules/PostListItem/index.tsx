/**
* Molecules/PostListItem
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import CategoryItem from '@/components/atoms/CategoryItem'
import DateTime from '@/components/atoms/DateTime'
/* types */
import { ImageType } from '@/types/image'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type PostListItemParams = {
  id: string
  title: string
  discription: string
  image: ImageType
  categories: string[]
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
      props.categories.map((v, i) =>
        <div key={i} className={styles.content__categoryItem}>
          <CategoryItem name={v} />
        </div>
      )
    )
  } 
  
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.image.url}
          alt="Thumbnail Picture"
          width={320 * 2}
          height={180 * 2}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.content__title}>{props.title}</h3>
        <div className={styles.content__discription}>{props.discription}</div>
        <div className={styles.content__category}>
          {category_area}
        </div>
        <div className={styles.content__time}>
          <DateTime date_time={props.created_time} />
        </div>
      </div>
    </div>
  )
}

export default PostListItem