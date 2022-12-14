import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button, { IButton, ARIA_LABEL } from './'

describe('Button', () => {
  const defaultProps: IButton = {
    children: 'ボタン',
    onClick: jest.fn(),
  }

  beforeEach(() => {
    render(<Button {...defaultProps} />)
  })

  test('描画される', () => {
    const buttonElement = screen.getByLabelText(ARIA_LABEL.BUTTON)
    expect(buttonElement).toBeInTheDocument()
  })

  test('children: 渡した子要素が描画される', () => {
    const childrenElement = screen.getByText(defaultProps.children as string)
    expect(childrenElement).toBeInTheDocument()
  })

  test('onClick: クリックすると渡した関数が発火する', () => {
    const buttonElement = screen.getByLabelText(ARIA_LABEL.BUTTON)
    fireEvent.click(buttonElement)
    expect(defaultProps.onClick).toBeCalled()
  })
})
