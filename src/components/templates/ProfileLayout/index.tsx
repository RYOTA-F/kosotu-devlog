/**
* Templates/ProfileLayout
* @package Component
*/
import React from 'react'
/* components */
import BaseLayout from '@/components/organisms/BaseLayout'
import SideProfile from '@/components/organisms/SideProfile'
import SideCategories from '@/components/organisms/SideCategories'
import ProfileArticle from '@/components/organisms/ProfileArticle'
/* constants */
/* types */
import { TableOfContentType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type ProfileLayoutProps = {
  profile: ProfileType
  highlightedBody: string,
  tableOfContents: TableOfContentType[],
  categories: CategoryType[]
}

/**
 * @param props ProfileLayoutProps
 * @returns
 */
const ProfileLayout: React.FC<ProfileLayoutProps> = (props: ProfileLayoutProps) => {
  const { profile, highlightedBody, tableOfContents, categories } = props

  return (
    <BaseLayout>
      <div className={styles.container}>
        <article className={styles.profile}>
          <ProfileArticle profile={profile} highlightedBody={highlightedBody} tableOfContents={tableOfContents} />
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

export default ProfileLayout