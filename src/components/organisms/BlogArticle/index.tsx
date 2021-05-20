/**
* Organisms/BlogArticle
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import CategoryItem from '@/components/atoms/CategoryItem'
import DateTime from '@/components/atoms/DateTime'
/* constants */
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type BlogArticleType = {
  blogItem: BlogItemType
}

/**
 * @param props TProps
 * @returns
 */
const BlogArticle: React.FC<BlogArticleType> = (props: BlogArticleType) => {
  const { blogItem } = props

  let category_area

  if (blogItem.categories.length) {
    category_area = (
      blogItem.categories.map((v, i) => (
        <div key={i} className={styles.category__item}>
          <CategoryItem name={v} size={'big'} />
        </div>
      ))
    )
  }

  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src={blogItem.image.url}
          width={blogItem.image.width * 2}
          height={blogItem.image.height *2 }
        />
      </div>

      <main>
        <h2 className={styles.title}>{blogItem.title}</h2>
        <div className={styles.categoryArea}>
          <div className={styles.category}>
            {category_area}
          </div>
          <div className={styles.time}>
            <DateTime date_time={blogItem.createdAt} />
          </div>
        </div>
      </main>
    </section>
  )
}

export default BlogArticle