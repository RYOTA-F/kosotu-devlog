/**
* Organisms/TableOfContents
* @package Component
*/
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
/* types */
import { TableOfContentType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type TableOfContentsType = {
  tableOfContents: TableOfContentType[]
}

/**
 * @param props TProps
 * @returns
 */
const TableOfContents: React.FC<TableOfContentsType> = (props: TableOfContentsType) => {
  const { tableOfContents } = props
  
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>目次</h4>
      <ul className={styles.lists}>
        {tableOfContents.map((v: TableOfContentType, i) => {
          const border = '-'
          const space = '\u00A0'

          let indentation = `${border}${space}`
          let listStyle = styles.list__h1

          if (v.name === 'h2') {
            listStyle = styles.list__h2
            indentation = `${space.repeat(2)}${border}${space.repeat(2)}`
          }

          if (v.name === 'h3') {
            listStyle = styles.list__h3
            indentation = `${space.repeat(5)}${border}${space.repeat(3)}`
          }
          
          return (
            <li key={i} className={listStyle}>
              <AnchorLink offset="100" href={`#${v.id}`}>
                {indentation}{v.text}
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TableOfContents