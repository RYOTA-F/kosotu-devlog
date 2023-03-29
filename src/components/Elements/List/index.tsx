import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from './const'

export interface IList {
  list: string[]
}

const List: FC<IList> = ({ list }) => (
  <ul className="p-4 text-black-text bg-yellow-list" aria-label={ARIA_LABEL}>
    {list.map((v) => (
      <li
        key={v}
        className="relative mt-1 mb-3 pl-6 pb-3 border-b-[1px] border-[dashed hsla(0, 0%, 78%, 0.5)]"
      >
        <span className="absolute bottom-[14px] left-[4px] text-[14px] text-green-list">
          ○
        </span>
        {v}
      </li>
    ))}
  </ul>
)

export default List
export * from './const'
