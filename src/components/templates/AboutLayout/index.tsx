/**
* Templates/AboutLayout
* @package Component
*/
import React from 'react'
/* components */
import AboutArticle from '@/components/organisms/AboutArticle'
import BaseLayout from '@/components/organisms/BaseLayout'
import SideProfile from '@/components/organisms/SideProfile'
import SideCategories from '@/components/organisms/SideCategories'
/* constants */
/* types */
import { TableOfContentType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { AboutType } from '@/types/about'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type AboutLayoutProps = {
  about: AboutType,
  highlightedBody: string,
  tableOfContents: TableOfContentType[],
  categories: CategoryType[]
}

/**
 * @param props TProps
 * @returns
 */
const AboutLayout: React.FC<AboutLayoutProps> = (props: AboutLayoutProps) => {
  const { about, highlightedBody, tableOfContents, categories } = props

  return (
    <BaseLayout>
      <div className={styles.container}>
        <article className={styles.about}>
          <AboutArticle about={about} highlightedBody={highlightedBody} tableOfContents={tableOfContents} />
        </article>
        <div className={styles.sideBar}>
          <SideProfile />
          <div className={styles.sideBar__item}>
            <SideCategories categories={categories} />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default AboutLayout