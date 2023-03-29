import { FC, ReactNode } from 'react'
/* Const */
import { ARIA_LABEL } from './const'

export interface ILabel {
  children: ReactNode
}

const Label: FC<ILabel> = ({ children }) => {
  return (
    <p
      className="inline-block py-3 px-4 text-gray-text-t4 bg-white border-l-8 border-blue-main font-bold shadow-md"
      aria-label={ARIA_LABEL}
    >
      {children}
    </p>
  )
}

export default Label
export * from './const'
