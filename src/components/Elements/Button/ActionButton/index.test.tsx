import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ActionButton, { IActionButton, ARIA_LABEL } from '.'

describe('ActionButton', () => {
  const defaultProps: IActionButton = {
    children: 'ボタン',
    onClick: jest.fn(),
  }

  beforeEach(() => {
    render(<ActionButton {...defaultProps} />)
  })

  test('描画される', () => {
    const actionButtonElement = screen.getByLabelText(ARIA_LABEL.ACTION_BUTTON)
    expect(actionButtonElement).toBeInTheDocument()
  })

  test('children: 渡した子要素が描画される', () => {
    const childrenElement = screen.getByText(defaultProps.children as string)
    expect(childrenElement).toBeInTheDocument()
  })

  test('onClick: クリックすると渡した関数が発火する', () => {
    const ActionButtonElement = screen.getByLabelText(ARIA_LABEL.ACTION_BUTTON)
    fireEvent.click(ActionButtonElement)
    expect(defaultProps.onClick).toBeCalled()
  })
})
