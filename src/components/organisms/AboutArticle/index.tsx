/**
* Organisms/AboutArticle
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import BlogArticleText from '@/components/molecules/BlogArticeText'
import TableOfContents from '@/components/organisms/TableOfContents'
/* types */
import { TableOfContentType } from '@/types/blog'
import { AboutType } from '@/types/about'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type AboutArticleProps = {
  about: AboutType
  highlightedBody: string,
  tableOfContents: TableOfContentType[]
}

/**
 * @param props TProps
 * @returns
 */
const AboutArticle: React.FC<AboutArticleProps> = (props: AboutArticleProps) => {
  const { about, highlightedBody, tableOfContents } = props
  
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src={about.image.url}
          alt="Picture"
          width={about.image.width * 2}
          height={about.image.height * 2}
        />
      </div>

      <main>
        <h2 className={styles.title}>{about.title}</h2>
        <div className={styles.table}>
          <TableOfContents tableOfContents={tableOfContents} />
        </div>
        <div className={styles.discription}>
          <BlogArticleText blogItemText={about.discription}/> 
        </div>
        <BlogArticleText blogItemText={highlightedBody}/>
      </main>
    </section>
  )
}

export default AboutArticle