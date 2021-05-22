/**
* Organisms/BlogArticeText
* @package Component
*/
import React from 'react'
import 'highlight.js/styles/atom-one-dark.css'
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
      className={styles.container}
      dangerouslySetInnerHTML={{
        __html: blogItemText,
      }}
    />
  )
}

export default BlogArticeText