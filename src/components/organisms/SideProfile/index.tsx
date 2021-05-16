/**
* Organisms/SideProfile
* @package Component
*/
import React from 'react'
import Image from 'next/image'
/* components */
import SnsIcon from '@/components/atoms/SnsIcon'
/* constsnts */
import { PROFILE_AVATER, PROFILE_MAIN, PROFILE_DISCRIPTION, PROFILE_SNS } from '@/constants/config'
/* styles */
import styles from './styles.module.scss'

/**
 * @param props TProps
 * @returns
 */
const SideProfile: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* アバター */}
      <div className={styles.avatar}>
        <Image
          className={styles.avatar__pic}
          src={PROFILE_AVATER}
          alt="Avatar"
          width={100}
          height={100}
        />
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
          <SnsIcon key={i} sns={v.sns} link_url={v.link} />
        )}
      </div>
    </div>
  )
}

export default SideProfile