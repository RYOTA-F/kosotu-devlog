import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AccordionMenu, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('AccordionMenu', () => {
  beforeEach(() => {
    render(<AccordionMenu {...defaultProps} />)
  })

  test('描画される', () => {
    const accordionMenuElement = screen.getByLabelText(
      ARIA_LABEL.ACCORDION_MENU
    )
    expect(accordionMenuElement).toBeInTheDocument()
  })

  test('マウスホバー時 メニューが表示される', () => {
    const accordionMenuElement = screen.getByLabelText(
      ARIA_LABEL.ACCORDION_MENU
    )
    fireEvent.mouseEnter(accordionMenuElement)

    const menuContainerElement = screen.getByLabelText(
      ARIA_LABEL.MENU_CONTAINER
    )
    expect(menuContainerElement).toBeInTheDocument()

    fireEvent.mouseLeave(accordionMenuElement)
    expect(screen.queryByLabelText(ARIA_LABEL.MENU_CONTAINER)).not
  })
})
