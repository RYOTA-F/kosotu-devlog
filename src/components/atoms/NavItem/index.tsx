/**
 * Atoms/LinkItem
 * @package Component
 */
import React from 'react'
/* components */
import Link from 'next/link'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
interface IProps {
  title: string
  link: string
}

/**
 * container
 * @params prop
 * @returns
 */
const NavItem: React.FC<IProps> = ({title, link} ) => {
  return (
    <div className={styles.container}>
      <Link href={link}>
        <div className={styles.title}>{title}</div>
      </Link>
    </div>
  )
}

export default NavItem