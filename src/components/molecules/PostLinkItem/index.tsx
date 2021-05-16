/**
* Molecules/PostLinkItem
* @package Component
*/
import React from 'react'
import Link from 'next/link'
/* components */
import AllowRightIcon from '@/components/atoms/AllowRightIcon'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type PostLinkItemProps = {
  title: string
  link: string
}

/**
 * @param props PostLinkItemProps
 * @returns
 */
const PostLinkItem: React.FC<PostLinkItemProps> = (props: PostLinkItemProps) => {
  return (
    <Link href={props.link}>
      <div className={styles.container}>
        <AllowRightIcon />
        <div className={styles.title}>{props.title}</div>
      </div>
    </Link>
  )
}

export default PostLinkItem