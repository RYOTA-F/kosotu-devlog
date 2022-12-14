import { ReactNode, FC } from 'react'
/* styles */
import style from './index.module.css'

export const ARIA_LABEL = {
  BUTTON: 'button',
}

export interface IButton {
  children: ReactNode
  onClick: () => void
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={style.button}
      aria-label={ARIA_LABEL.BUTTON}
    >
      {children}
    </button>
  )
}

export default Button
