/**
* Organisms/SideProfile
* @package Component
*/
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* components */
import SnsIcon from '@/components/atoms/SnsIcon'
/* constsnts */
import { PROFILE_AVATER, PROFILE_MAIN, PROFILE_DISCRIPTION, PROFILE_SNS } from '@/constants/config'
/* styles */
import styles from './styles.module.scss'

/**
 * @param none
 * @returns
 */
const SideProfile: React.FC = () => {
  return (
    <>
      <div className={styles.title}>プロフィール</div>
      <div className={styles.container}>
        {/* アバター */}
        <div className={styles.avatar}>
          <Link href={"/profile"}>
            <Image
              className={styles.avatar__pic}
              src={PROFILE_AVATER}
              alt="Avatar"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <hr className={styles.border} />
        
        {/* プロフィール */}
        <div className={styles.profile}>
          <p className={styles.profile__name}>{PROFILE_MAIN.name}</p>
          <p className={styles.profile__position}>{PROFILE_MAIN.position}</p>
        </div>

        <hr className={styles.border} />

        {/* 説明 */}
        <div className={styles.discription}>
          <ul>
            {PROFILE_DISCRIPTION.map((v, i) =>
              <li key={i} className={styles.discription__list}>・{v}</li>
            )}
          </ul>
        </div>

        <hr className={styles.border} />

        {/* SNS */}
        <div className={styles.followMe}>
          <div>\</div>
          <div>Follow me</div>
          <div>/</div>
        </div>
        <div className={styles.sns}>
          {PROFILE_SNS.map((v, i) =>
            <div key={i} className={styles.sns__icon}>
              <SnsIcon sns={v.sns} link_url={v.link} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SideProfile