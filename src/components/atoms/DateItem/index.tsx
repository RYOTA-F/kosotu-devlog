/**
* Atoms/DateItem
* @package Component
*/
import React from 'react'
/* components */
import Icon from '@/components/atoms/Icon'
/* logics */
import { showDate } from '@/logic/DateLogic'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type DateTimeProsp = {
  date_time: string
}

/**
 * @param props TProps
 * @returns
 */
const DateItem: React.FC<DateTimeProsp> = (props: DateTimeProsp) => {
  return (
    <div className={styles.container}>
      <Icon name={'pen'} />
      <p>{ showDate(props.date_time) }</p>
    </div>
  )
}

export default DateItem