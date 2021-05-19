/**
* Atoms/DateTime
* @package Component
*/
import React from 'react'
/* logics */
import { showDateTime } from '@/logic/DateLogic'

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
const DateTime: React.FC<DateTimeProsp> = (props: DateTimeProsp) => {
  return (
    <div>
      <p>{ showDateTime(props.date_time) }</p>
    </div>
  )
}

export default DateTime