/**
* Organisms/TableOfContents
* @package Component
*/
import React from 'react'
/* constants */
import { TABLE_OF_CONTENTENS, testTOC } from '@/constants/test'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type TProps = {
}

/**
 * @param props TProps
 * @returns
 */
const TableOfContents: React.FC = () => {
  return (
    <div className={styles.container}>
      <h4>目次</h4>
      <ul className={styles.lists}>
        {TABLE_OF_CONTENTENS.map((v: testTOC) => {
          const border = '-'
          const space = '\u00A0'

          let indentation = `${border}${space}`
          let listStyle = styles.list__h1

          if (v.type === 'h2') {
            listStyle = styles.list__h2
            indentation = `${space.repeat(2)}${border}${space.repeat(2)}`
          }

          if (v.type === 'h3') {
            listStyle = styles.list__h3
            indentation = `${space.repeat(5)}${border}${space.repeat(3)}`
          }
          
          return (
            <li key={v.id} className={listStyle}>
              {indentation}{v.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TableOfContents