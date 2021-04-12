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
        {'高卒Webエンジニアのぼやき'}
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