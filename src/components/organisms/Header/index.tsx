/**
 * Organisms/Header
 * @package Component
 */
import React from 'react'
/* components */
import NavItem from '@/components/atoms/NavItem'
/* constants */
import { BASE_TITLE } from '@/constants/config'
/* styles */
import styles from './styles.module.scss'

/**
 * @param none
 * @returns
 */
const Header: React.FC = () => {
  const navLinks = [
    {
      title: 'フロントエンド',
      link: '/category/front-end'
    },
    {
      title: 'バックエンド',
      link: '/category/back-end'
    },
    {
      title: 'プロフィール',
      link: '/category/profile'
    },
    {
      title: 'お問い合わせ',
      link: '/category/contact'
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {BASE_TITLE}
      </div>
      <div className={styles.nav_links}>
        {
          navLinks.map((v, i) => (
            <NavItem key={i} title={v.title} link={v.link} />
          ))
        }
      </div>
    </div>
  )
}

export default Header