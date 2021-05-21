/**
* Organisms/BlogArticle
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import BlogArticleText from '@/components/organisms/BlogArticeText'
import CategoryItem from '@/components/atoms/CategoryItem'
import DateItem from '@/components/atoms/DateItem'
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type BlogArticleType = {
  blogItem: BlogItemType
  highlightedBody: string
}

/**
 * @param props TProps
 * @returns
 */
const BlogArticle: React.FC<BlogArticleType> = (props: BlogArticleType) => {
  const { blogItem, highlightedBody } = props

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
          alt="Picture"
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
            <DateItem date_time={blogItem.createdAt} />
          </div>
        </div>
        <BlogArticleText blogItemText={highlightedBody}/>
      </main>
    </section>
  )
}

export default BlogArticle