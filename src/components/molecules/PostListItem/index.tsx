/**
* Molecules/PostListItem
* @package Component
*/
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* components */
import CategoryItem from '@/components/atoms/CategoryItem'
import DateItem from '@/components/atoms/DateItem'
/* types */
import { CategoryType } from '@/types/category'
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
      props.categories.map((v, i) =>
        <div key={i} className={styles.content__categoryItem}>
          <CategoryItem id={v.id} name={v.name} size={'normal'} />
        </div>
      )
    )
  } 
  
  return (
    <Link href="/[blogId]" as={`/${props.id}`}>
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
            <DateItem date_time={props.created_time} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostListItem