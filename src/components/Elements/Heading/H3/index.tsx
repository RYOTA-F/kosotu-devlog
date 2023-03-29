import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from '../const'
/* Types */
import { IHeadingDefault } from '../types'

const H3: FC<IHeadingDefault> = ({ children }) => {
  return (
    <h3
      className="mt-10 mb-7 py-1 px-4 text-gray-text-t4 bg-gray-list font-bold border-l-4 border-blue-main"
      aria-label={ARIA_LABEL.H3}
    >
      {children}
    </h3>
  )
}

export default H3
