import { ReactNode, FC } from 'react'
/* styles */
import { ButtonWrapper } from './index.styles'

export const ARIA_LABEL = {
  BUTTON: 'button',
}

export interface IButton {
  children: ReactNode
  onClick: () => void
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} aria-label={ARIA_LABEL.BUTTON}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
