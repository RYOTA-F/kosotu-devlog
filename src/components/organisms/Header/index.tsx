/**
 * Organisms/Header
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import NavItem from '@/components/atoms/NavItem'
/* constants */
import { BASE_TITLE, HEADER_LINK } from '@/constants/config'
/* styles */
import styles from './styles.module.scss'

/**
 * @param none
 * @returns
 */
const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/">
          {BASE_TITLE}
        </Link>
      </div>
      <div className={styles.nav_links}>
        {
          HEADER_LINK.map((v, i) => (
            <NavItem key={i} title={v.title} link={v.link} />
          ))
        }
      </div>
    </div>
  )
}

export default Header