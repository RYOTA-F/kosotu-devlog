import { ReactNode, FC } from 'react'
/* Styles */
import { ButtonWrapper } from './index.styles'

export const ARIA_LABEL = {
  ACTION_BUTTON: 'actionButton',
}

export interface IActionButton {
  borderRadius?: number
  padding?: number
  color?: 'none' | 'default'
  children: ReactNode
  onClick: () => void
}

const ActionButton: FC<IActionButton> = ({
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
      aria-label={ARIA_LABEL.ACTION_BUTTON}
    >
      {children}
    </ButtonWrapper>
  )
}

export default ActionButton
