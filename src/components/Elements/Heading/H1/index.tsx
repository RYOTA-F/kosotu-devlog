import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from '../const'
/* Types */
import { IHeadingDefault } from '../types'

const H1: FC<IHeadingDefault> = ({ children }) => {
  return (
    <h1
      className="mb-[60px] pl-4 text-gray-text-t3 text-[24px] font-bold relative"
      aria-label={ARIA_LABEL.H1}
    >
      {children}
      <div className="absolute content-[''] w-full -bottom-[10px] left-0 h-[2px] bg-gradient-to-r from-blue-main" />
    </h1>
  )
}

export default H1
