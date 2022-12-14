import { ReactNode, FC } from 'react'

export interface IButton {
  children: ReactNode
  onClick: () => void
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

export default Button
