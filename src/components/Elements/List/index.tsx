import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { Wrapper, ListItem } from './index.styles'

export interface IList {
  list: string[]
}

const List: FC<IList> = ({ list }) => {
  return (
    <Wrapper aria-label={ARIA_LABEL}>
      {list.map((v) => (
        <ListItem key={v}>{v}</ListItem>
      ))}
    </Wrapper>
  )
}

export default List
export * from './const'
