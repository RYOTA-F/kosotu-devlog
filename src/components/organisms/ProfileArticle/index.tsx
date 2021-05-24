/**
* Organisms/ProfileArticle
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import BlogArticleText from '@/components/molecules/BlogArticeText'
/* constants */
/* types */
import { ProfileType } from '@/types/profile'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type ProfileArticleProps = {
  profile: ProfileType
  highlightedBody: string,
}

/**
 * @param props ProfileArticleProps
 * @returns
 */
const ProfileArticle: React.FC<ProfileArticleProps> = (props: ProfileArticleProps) => {
  const { profile, highlightedBody } = props
  
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>プロフィール</h2>
      <div className={styles.image}>
        <Image
          src={profile.image.url}
          alt="Picture"
          width={profile.image.width * 1.5}
          height={profile.image.height * 1.5}
        />
      </div>

      <main>
        <BlogArticleText blogItemText={highlightedBody}/>
      </main>
    </section>
  )
}

export default ProfileArticle