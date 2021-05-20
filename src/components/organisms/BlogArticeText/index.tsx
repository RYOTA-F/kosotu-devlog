/**
* Organisms/BlogArticeText
* @package Component
*/
import React from 'react'
import 'highlight.js/styles/shades-of-purple.css'
/* components */
/* constants */
/* types */
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type BlogArticeText = {
  blogItemText: string
}

/**
 * @param props BlogArticeText
 * @returns
 */
const BlogArticeText: React.FC<BlogArticeText> = (props: BlogArticeText) => {
  const { blogItemText } = props
  return (
    <div
      className={styles.contents}
      dangerouslySetInnerHTML={{
        __html: blogItemText,
      }}
    />
  )
}

export default BlogArticeText