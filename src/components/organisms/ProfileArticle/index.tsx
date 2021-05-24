/**
* Organisms/ProfileArticle
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import BlogArticleText from '@/components/molecules/BlogArticeText'
import TableOfContents from '@/components/organisms/TableOfContents'
/* types */
import { TableOfContentType } from '@/types/blog'
import { ProfileType } from '@/types/profile'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type ProfileArticleProps = {
  profile: ProfileType
  highlightedBody: string,
  tableOfContents: TableOfContentType[]
}

/**
 * @param props ProfileArticleProps
 * @returns
 */
const ProfileArticle: React.FC<ProfileArticleProps> = (props: ProfileArticleProps) => {
  const { profile, highlightedBody, tableOfContents } = props
  
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>プロフィール</h2>
      <div className={styles.image}>
        <Image
          src={profile.image.url}
          alt="Picture"
          width={profile.image.width * 1.25}
          height={profile.image.height * 1.25}
        />
      </div>

      <main>
        <div className={styles.discription}>
          <BlogArticleText blogItemText={profile.discription}/> 
        </div>
        <TableOfContents tableOfContents={tableOfContents} />
        <BlogArticleText blogItemText={highlightedBody}/>
      </main>
    </section>
  )
}

export default ProfileArticle