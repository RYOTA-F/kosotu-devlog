/**
 * organisms/Header
 * Organisms
 * @package Component
 */
import React from 'react'
/* components */
import NavItem from '@/components/atoms/NavItem'
/* styles */
import styles from './styles.module.scss'

/**
 * container
 * @param
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
      link: '/category/front-end'
    },
    {
      title: 'プロフィール',
      link: '/category/front-end'
    },
    {
      title: 'お問い合わせ',
      link: '/category/front-end'
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.nav_links}>
        {navLinks.map((v, i) => (
          <NavItem key={i} title={v.title} link={v.link}/>
        ))}
      </div>
    </div>
  )
}

export default Header