import { ReactNode, FC } from 'react'
import style from './index.module.css'

export interface IButton {
  children: ReactNode
  onClick: () => void
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  )
}

export default Button
