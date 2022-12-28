import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from '../const'
/* Styles */
import { Wrapper } from './index.styles'
/* Types */
import { IHeadingDefault } from '../types'

const H2: FC<IHeadingDefault> = ({ children }) => {
  return <Wrapper aria-label={ARIA_LABEL.H2}>{children}</Wrapper>
}

export default H2
