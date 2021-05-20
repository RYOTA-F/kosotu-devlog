/**
* Organisms/Footer
* @package Component
*/
import React from 'react'
import Link from 'next/link'
/* components */
/* constants */
import { BASE_TITLE } from '@/constants/config'
/* types */
/* styles */
import styles from './styles.module.scss'

/**
 * @param none
 * @returns
 */
const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        <Link href={'/'}>
          <li className={styles.list}>HOME</li>
        </Link>
        <li className={styles.after}>|</li>
        <Link href={''}>
          <li className={styles.list}>プライバシーポリシー</li>
        </Link>
        <li className={styles.after}>|</li>
        <Link href={''}>
          <li className={styles.list}>免責事項</li>
        </Link>
      </ul>

      {/* copyright */}
      <p className={styles.copy}>© 2021 {BASE_TITLE}</p>
    </div>
  )
}

export default Footer