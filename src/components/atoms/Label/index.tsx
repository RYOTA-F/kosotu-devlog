import { FC, ReactNode } from 'react'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { Wrapper } from './index.styles'

export interface ILabel {
  children: ReactNode
}

const Label: FC<ILabel> = ({ children }) => {
  return <Wrapper aria-label={ARIA_LABEL}>{children}</Wrapper>
}

export default Label
export * from './const'
