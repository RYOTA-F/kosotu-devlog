import { ReactNode, FC } from 'react'
/* Styles */
import { ButtonWrapper } from './index.styles'

export const ARIA_LABEL = {
  BUTTON: 'button',
}

export interface IButton {
  borderRadius?: number
  padding?: number
  color?: 'none' | 'default'
  children: ReactNode
  onClick: () => void
}

const Button: FC<IButton> = ({
  borderRadius = 0,
  padding = 0,
  color = 'default',
  children,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      borderRadius={borderRadius}
      padding={padding}
      color={color}
      aria-label={ARIA_LABEL.BUTTON}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
